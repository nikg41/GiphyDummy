import React, { useEffect } from "react";
import { SafeAreaView, Text, View, StatusBar, BackHandler, Pressable } from "react-native";
import styles from "./styles";
import { LOGOUT, CLEAR_DATA } from "../../constants";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
const AccountScreen = (props) => {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails);
    const email = userDetails.email;
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);
    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#252525"} />
            <Header
                title={"Account"}
                isBackVisible={false} />

            <View style={styles.mainView}>
                <Text style={styles.text}>{`HI, ${email}`}</Text>
            </View>
            <View style={styles.buttonView}>
                <Pressable
                    onPress={() => {
                        dispatch({ type: LOGOUT })
                        dispatch({ type: CLEAR_DATA })
                    }}
                    style={styles.button}>
                    <Icon name={"logout"} size={20} color={"#DFDFDF"} />
                    <Text style={styles.buttonText}>{"Logout"}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </React.Fragment>
};

export default AccountScreen;
