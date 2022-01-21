import React from "react";
import { Image, Pressable, SafeAreaView, Text, View, StatusBar } from "react-native";
import { logo } from "../../Images"
import styles from "./styles";
import { useSelector } from 'react-redux';

const InitialScreen = (props) => {
    const userDetails = useSelector(state => state.userDetails);
    const loggedIn = userDetails.isLoggedIn;
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
                        if (loggedIn) {
                            props.navigation.navigate("MainScreen")
                        } else
                            props.navigation.navigate("RegisterScreen")
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{loggedIn ? "Continue" : "Get Started"}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </React.Fragment>
};

export default InitialScreen;
