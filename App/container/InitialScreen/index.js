import React from "react";
import { Image, Pressable, SafeAreaView, Text, View, StatusBar } from "react-native";
import { logo } from "../../Images"
import styles from "./styles";
import { useSelector } from 'react-redux';

const InitialScreen = (props) => {
    return <React.Fragment>
        <StatusBar backgroundColor={"#000"} />
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image
                    source={logo} />
            </View>
            <View style={styles.buttonView}>
                <Pressable
                    onPress={() => {
                        props.navigation.navigate("MainScreen")
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{"Get Started"}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </React.Fragment>
};

export default InitialScreen;
