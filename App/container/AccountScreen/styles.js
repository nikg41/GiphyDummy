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

    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800"
    },

    mainView: {
        padding: 25
    },

    buttonView: {
        position: "absolute",
        alignSelf: 'center',
        width: "100%",
        bottom: 30
    },

    button: {
        borderColor: "#DFDFDF",
        width: "50%",
        height: 45,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        elevation: 20,
        zIndex: 20,
        alignSelf: "center",
        flexDirection: "row"
    },

    buttonText: {
        color: "#DFDFDF",
        fontSize: 16,
        paddingLeft: 20,
        fontWeight: "700"
    }

})

export default styles;