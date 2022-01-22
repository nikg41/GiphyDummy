import { Dimensions, StyleSheet, Platform } from "react-native";
let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#252525",
        flex: 0,
        height: Platform.OS === "ios" ? 30 : 0
    },
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    mainView: {
        marginHorizontal: 15,
        marginTop: 15
    },

    serachListContainerStyle: {
        backgroundColor: "#F1F1F1",

        position: "absolute",
        top: 45,
        width: "100%",
        height: 200,
        zIndex: Platform.OS === "ios" ? 2 : 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        paddingBottom: 10
    },

    serachListItemStyle: {
        padding: 10,
        borderColor: "#717171",
        borderBottomWidth: 0.5,
    },

    serachListMainTextStyle: { color: "#000", fontSize: 18 },

    serachListTextStyle: {
        fontSize: 14,
        lineHeight: 16.7,
        color: "#4a4a4a",
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
        width: width / 3.3,
        height: width / 3.3,
        borderWidth: 3,
        margin: 3
    },

    flatListStyle: {
        marginTop: 15,
        height: height - 240
    }

})

export default styles;