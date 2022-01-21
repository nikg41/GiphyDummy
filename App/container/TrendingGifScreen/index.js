import { isEmpty } from "ramda";
import React, { useEffect, useState } from "react";
import { Pressable, View, SafeAreaView, FlatList, StatusBar, ActivityIndicator } from "react-native";
import { BASE_URL, API_KEY } from "../../Config";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import GifImage from '@lowkey/react-native-gif';
import { SAVE_TRENDING_MORE_DATA, SAVE_MODAL_DATA, CLEAR_TRENDING_MORE_DATA } from "../../constants";
import Header from "../../components/Header";
import GifModal from "../../components/GifModal";
import axios from "axios";
const TrendingGifScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setoffset] = useState(0);
    const trending = useSelector(state => state.giphyData.trendingMoreData);
    const modalData = useSelector(state => state.giphyData.modalData);
    const isVisible = useSelector(state => state.giphyData.isVisible);
    const dispatch = useDispatch();

    const getTrendingGifs = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}gifs/trending`, {
                "params": {
                    "api_key": API_KEY,
                    "limit": 50,
                    "offset": offset
                },
            });
            dispatch({ type: SAVE_TRENDING_MORE_DATA, payload: response.data })
            setIsLoading(false);
            setoffset((prev) => prev + 50)
        } catch (error) {
            console.log(":::::: error", error.message);
            setIsLoading(false);
            // setError();
        }
    };
    useEffect(() => {
        getTrendingGifs();
    }, []);

    const onBackPress = () => {
        props.navigation.navigate("MainScreen");
        dispatch({ type: CLEAR_TRENDING_MORE_DATA });
    };


    const renderItem = (gif) => {
        let image = gif.images.preview_gif.url;
        return <Pressable
            onPress={() => {
                dispatch({ type: SAVE_MODAL_DATA, payload: gif.images.original.url })
            }}>
            <GifImage
                resizeMode='contain'
                style={styles.image}
                source={{ uri: image }}
            />
        </Pressable>
    }

    return <React.Fragment>
        <StatusBar backgroundColor={"#000"} />
        <SafeAreaView style={styles.container}>
            <Header
                title={"Trending Gifs"}
                onBackPress={() => onBackPress()} />
            <FlatList
                style={{ marginTop: 15 }}
                showsHorizontalScrollIndicator={false}
                data={!isEmpty(trending) ? trending : []}
                renderItem={({ item, index }) => renderItem(item)}
                numColumns={3}
                onEndReached={() => {
                    getTrendingGifs();
                }}
            />
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

export default TrendingGifScreen;
