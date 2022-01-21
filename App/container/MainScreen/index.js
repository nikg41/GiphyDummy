import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StatusBar, ActivityIndicator } from "react-native";
import styles from "./styles";
import { BASE_URL, API_KEY } from "../../Config";
import axios from "axios";
import { SAVE_TRENDING_DATA } from "../../constants";

import { useDispatch, useSelector } from "react-redux";

const MainScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const trending = useSelector(state => state.giphyData.trendingData);

    const getTrendingGifs = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}gifs/trending`, {
                "params": {
                    "api_key": API_KEY,
                    "limit": 20
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
    console.log(":: trending", trending)
    useEffect(() => {
        getTrendingGifs();
    }, []);

    return <React.Fragment>
        <StatusBar backgroundColor={"#000"} />
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
            {isLoading ? (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color={"#312F57"} />
                </View>
            ) : null}
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
