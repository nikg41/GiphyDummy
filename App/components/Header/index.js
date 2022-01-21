import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles"

const Header = (props) => {
    return <View style={styles.headerContainer}>
        <Pressable
            style={styles.backIconView}
            onPress={() => props.onBackPress()}>
            <Icon name="arrow-left" size={25} color={"white"} />
        </Pressable>

        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
};

export default Header;
