import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

const RegistartionCard = (props) => {
    return <View style={styles.cardView}>
        {props.children}
    </View>
};

export default RegistartionCard;
