import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StatusBar, ActivityIndicator, BackHandler } from "react-native";
import styles from "./styles";
import { BASE_URL, API_KEY } from "../../Config";
import axios from "axios";
import { SAVE_TRENDING_DATA } from "../../constants";

import { useDispatch, useSelector } from "react-redux";
import TrendingGifs from "../../components/TrendingGifs";
import Header from "../../components/Header";
import GifModal from "../../components/GifModal";
import TrendingStickers from "../../components/TrendingStickers";
const MainScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const modalData = useSelector(state => state.giphyData.modalData);
    const isVisible = useSelector(state => state.giphyData.isVisible);
    const userDetails = useSelector(state => state.userDetails);
    const loggedIn = userDetails.isLoggedIn;

    console.log(":::::: loggedIn", loggedIn)

    const getTrendingGifs = async () => {
        setIsLoading(true);
        try {
            let configureObjects = [
                axios.get(`${BASE_URL}gifs/trending`, {
                    "params": {
                        "api_key": API_KEY,
                        "limit": 20
                    },
                }),
                axios.get(`${BASE_URL}stickers/trending`, {
                    "params": {
                        "api_key": API_KEY,
                        "limit": 20
                    },
                })
            ]
            const responses = await axios.all(configureObjects);

            dispatch({
                type: SAVE_TRENDING_DATA, payload: {
                    trendingData: responses[0].data.data,
                    trendingStickers: responses[1].data.data,
                }
            })
            setIsLoading(false);
        } catch (error) {
            console.log(":::::: error", error.message);
            setIsLoading(false);
            // setError();
        }
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });

        getTrendingGifs();
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#000"} />
            <Header
                title={"Giphy"}
                isBackVisible={false}
                onBackPress={() => props.navigation.navigate("InitialScreen")} />
            <View style={{ margin: 20 }}>
                <TrendingGifs
                    onMorePress={() => props.navigation.navigate("TrendingGifScreen")} />
                <TrendingStickers
                    onMorePress={() => props.navigation.navigate("TrendingStickersScreen")}
                />
            </View>
            {isLoading ? (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color={"#FFF"} />
                </View>
            ) : null}
            {isVisible && <GifModal
                modalData={modalData}
                isVisible={isVisible}
            />}
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
