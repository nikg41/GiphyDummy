import { isEmpty } from "ramda";
import React, { useEffect, useState } from "react";
import { Pressable, Image, View, SafeAreaView, FlatList, StatusBar, ActivityIndicator, BackHandler } from "react-native";
import { BASE_URL, API_KEY } from "../../Config";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { SAVE_TRENDING_MORE_STICKERS, SAVE_MODAL_DATA, CLEAR_TRENDING_MORE_STICKERS } from "../../constants";
import Header from "../../components/Header";
import GifModal from "../../components/GifModal";
import axios from "axios";

const TrendingStickersScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setoffset] = useState(0);
    const trendingMoreStickers = useSelector(state => state.giphyData.trendingMoreStickers);
    const modalData = useSelector(state => state.giphyData.modalData);
    const isVisible = useSelector(state => state.giphyData.isVisible);
    const dispatch = useDispatch();

    const getTrendingStickers = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}stickers/trending`, {
                "params": {
                    "api_key": API_KEY,
                    "limit": 50,
                    "offset": offset
                },
            });
            dispatch({ type: SAVE_TRENDING_MORE_STICKERS, payload: response.data })
            setIsLoading(false);
            setoffset((prev) => prev + 50)
        } catch (error) {
            console.log(":::::: error", error.message);
            setIsLoading(false);
            // setError();
        }
    };
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });

        getTrendingStickers();
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);

    const onBackPress = () => {
        props.navigation.navigate("MainScreen");
        dispatch({ type: CLEAR_TRENDING_MORE_STICKERS });
    };


    const renderItem = (gif) => {
        let image = gif.images.preview_gif.url;
        return <Pressable
            onPress={() => {
                dispatch({ type: SAVE_MODAL_DATA, payload: image })
            }}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={{ uri: image }}
            />
        </Pressable>
    }

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#252525"} />
            <Header
                title={"Trending Stickers"}
                onBackPress={() => onBackPress()} />
            <FlatList
                style={{ marginTop: 15 }}
                showsHorizontalScrollIndicator={false}
                data={!isEmpty(trendingMoreStickers) ? trendingMoreStickers : []}
                renderItem={({ item, index }) => renderItem(item)}
                numColumns={3}
                keyExtractor={(item, index) => item.id + index}
                onEndReached={() => {
                    getTrendingStickers();
                }}
            />
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

export default TrendingStickersScreen;
