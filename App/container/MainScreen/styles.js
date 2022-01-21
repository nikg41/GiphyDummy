import { StyleSheet, Platform } from "react-native";

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
    activityIndicator: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
    },
})

export default styles;