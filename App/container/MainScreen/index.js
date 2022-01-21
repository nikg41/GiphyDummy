import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StatusBar, ActivityIndicator } from "react-native";
import styles from "./styles";
import { BASE_URL, API_KEY } from "../../Config";
import axios from "axios";
import { SAVE_TRENDING_DATA } from "../../constants";

import { useDispatch, useSelector } from "react-redux";
import TrendingGifs from "../../components/TrendingGifs";
import Header from "../../components/Header";
import GifModal from "../../components/GifModal";
const MainScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const modalData = useSelector(state => state.giphyData.modalData);
    const isVisible = useSelector(state => state.giphyData.isVisible);

    const getTrendingGifs = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}gifs/trending`, {
                "params": {
                    "api_key": API_KEY,
                    "limit": 15
                },
            });;

            dispatch({ type: SAVE_TRENDING_DATA, payload: response.data })
            setIsLoading(false);
        } catch (error) {
            console.log(":::::: error", error.message);
            setIsLoading(false);
            // setError();
        }
    }
    useEffect(() => {
        getTrendingGifs();
    }, []);

    return <React.Fragment>
        <StatusBar backgroundColor={"#000"} />
        <SafeAreaView style={styles.container}>
            <Header
                title={"Giphy"}
                onBackPress={() => props.navigation.navigate("InitialScreen")} />
            <View style={{ margin: 20 }}>
                <TrendingGifs />
            </View>
            {isLoading ? (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color={"#312F57"} />
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
