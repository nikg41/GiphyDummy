import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    BackHandler,
    Pressable,
    FlatList,
    ActivityIndicator,
    Keyboard,
    Image
} from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { SearchBar } from "react-native-elements";
import { BASE_URL, API_KEY } from "../../Config";
import axios from 'axios';
import { isEmpty } from "ramda";
import { SAVE_MODAL_DATA, SAVE_SEARCH_DATA, CLEAR_SEARCH_DATA } from "../../constants";
import GifModal from "../../components/GifModal";

const SearchScreen = (props) => {
    const dispatch = useDispatch();
    const [serachText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const modalData = useSelector(state => state.giphyData.modalData);
    const isVisible = useSelector(state => state.giphyData.isVisible);
    const searchGifs = useSelector(state => state.giphyData.serachData);

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
        return () => {
            dispatch({ type: CLEAR_SEARCH_DATA })
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);

    const getSearchList = async (serachText) => {
        try {
            const response = await axios.get(`${BASE_URL}tags/related/${serachText}`, {
                "params": {
                    "api_key": API_KEY,
                },
            });
            setSearchData(response.data.data)
        } catch (error) {
            console.log(":::::: error", error.message);
        }
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (!isEmpty(serachText)) {
                Keyboard.dismiss();
                getSearchList(serachText)
            }
            else {
                setSearchData([])
            }
        }, 2000)

        return () => clearTimeout(delayDebounceFn)
    }, [serachText]);

    const getSearchData = async () => {
        setIsLoading(true);
        try {
            let configureObjects = [
                axios.get(`${BASE_URL}gifs/trending`, {
                    "params": {
                        "api_key": API_KEY,
                        "limit": 10,
                        "q": searchTerm,
                    },
                }),
                axios.get(`${BASE_URL}stickers/trending`, {
                    "params": {
                        "api_key": API_KEY,
                        "limit": 10,
                        "q": searchTerm,
                    },
                })
            ]
            const responses = await axios.all(configureObjects);
            const data = responses[0].data.data.concat(responses[1].data.data);
            dispatch({ type: SAVE_SEARCH_DATA, payload: data })
            setIsLoading(false);
        } catch (error) {
            console.log(":::::: error", error.message);
            setIsLoading(false);
        }
    }

    const onSearcItemSelect = (name) => {
        setSearchData([]);
        setSearchText('');
        setSearchTerm(name);
        getSearchData()
        dispatch({ type: CLEAR_SEARCH_DATA })
    }

    const renderSearchResultList = () => {
        if (isEmpty(searchData)) {
            return null;
        }

        const renderItem = ({ item }) => {
            return (
                <View>
                    <Pressable
                        style={styles.serachListItemStyle}
                        onPress={() => {
                            onSearcItemSelect(item.name)
                        }}
                    >
                        <Text
                            style={styles.serachListTextStyle}
                            numberOfLines={1}
                            ellipsizeMode={"tail"}
                        >
                            {item.name}
                        </Text>
                    </Pressable>
                </View>
            );
        };

        return (
            <View style={styles.serachListContainerStyle}>
                <FlatList
                    data={searchData}
                    style={{ padding: 10 }}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.name + index}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
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
                title={"Search"}
                isBackVisible={false} />
            <View style={styles.mainView}>
                <SearchBar
                    containerStyle={{ borderRadius: 8, height: 40, padding: 0 }}
                    inputContainerStyle={{ borderRadius: 8, height: 40, margin: 0 }}
                    placeholder={"Search Gifs"}
                    value={serachText}
                    onChangeText={value => setSearchText(value)}
                />
                {renderSearchResultList()}
                <FlatList
                    style={styles.flatListStyle}
                    showsHorizontalScrollIndicator={false}
                    data={!isEmpty(searchGifs) ? searchGifs : []}
                    renderItem={({ item, index }) => renderItem(item)}
                    numColumns={3}
                    keyExtractor={(item, index) => item.id + index}
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

export default SearchScreen;
