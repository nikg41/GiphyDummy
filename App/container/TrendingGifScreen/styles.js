import { Dimensions, StyleSheet } from "react-native";
let width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    activityIndicator: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
    },

    image: {
        width: width / 3.05,
        height: width / 3.05,
        borderWidth: 3,
        margin: 5
    },
})

export default styles;