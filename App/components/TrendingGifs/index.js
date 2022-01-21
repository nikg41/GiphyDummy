import { isEmpty } from "ramda";
import React from "react";
import { Pressable, Text, View, Image, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import GifImage from '@lowkey/react-native-gif';
import { SAVE_MODAL_DATA } from "../../constants";


const TrendingGifs = (props) => {
    const trending = useSelector(state => state.giphyData.trendingData);
    const dispatch = useDispatch();
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
    return <View>
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Icon name="chart-line-variant" size={22} color={"#59C6FA"} />
                <Text style={styles.headerTitle}>Trending</Text>
            </View>
            <Pressable
                style={{ flexDirection: "row" }}
                onPress={() => props.onMorePress()}>
                <Text style={styles.more}>{"More gifs"}</Text>
                <Icon name="chevron-right" size={22} color={"#A6A6A6"} />
            </Pressable>
        </View>
        <FlatList
            style={{ marginTop: 15 }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={!isEmpty(trending) ? trending.data : []}
            renderItem={({ item, index }) => renderItem(item)}
        />
    </View>
};

export default TrendingGifs;
