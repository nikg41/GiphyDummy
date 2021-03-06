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

    buttonView: {
        position: "absolute",
        alignSelf: 'center',
        marginBottom: 40,
        width: "100%",
        bottom: 20
    },

    button: {
        backgroundColor: "#DFDFDF",
        width: "50%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        elevation: 20,
        zIndex: 20,
        alignSelf: "center"
    },

    buttonText: {
        color: "#393737",
        fontSize: 16,
        fontWeight: "700"
    }
})

export default styles;