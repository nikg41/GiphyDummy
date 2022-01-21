import React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import styles from "./styles";

const MainScreen = (props) => {
    return <React.Fragment>
        <StatusBar backgroundColor={"#000"} />
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    </React.Fragment>
};

export default MainScreen;
