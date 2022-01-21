import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles"

const Header = ({
    title,
    onBackPress,
    isBackVisible = true
}) => {
    return <View style={styles.headerContainer}>
        {isBackVisible && <Pressable
            style={styles.backIconView}
            onPress={() => onBackPress()}>
            <Icon name="arrow-left" size={25} color={"white"} />
        </Pressable>}

        <Text style={styles.headerTitle}>{title}</Text>
    </View>
};

export default Header;
