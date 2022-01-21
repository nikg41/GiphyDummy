import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const Header = (props) => {
    return <View style={styles.headerView}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
};

export default Header;
