import React from "react";
import { ImageBackground, Pressable, SafeAreaView, Text, View, StatusBar } from "react-native";
import { background } from "../../Images"
import styles from "./styles";
import { useSelector } from 'react-redux';

const InitialScreen = (props) => {
    return <React.Fragment>
        <StatusBar backgroundColor={"#312F57"} />
        <SafeAreaView style={styles.container}>
           <View><Text>Hello</Text></View>
        </SafeAreaView>
    </React.Fragment>
};

export default InitialScreen;
