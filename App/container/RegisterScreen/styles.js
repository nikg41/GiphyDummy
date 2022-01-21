import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#312F57",
        flex: 0,
    },

    container: {
        flex: 1,
        backgroundColor: "#312F57"
    },

    signupView: {
        marginVertical: 20
    },

    textInputView: {
        width: width - 30,
        height: 45,
        backgroundColor: "#F2F2F2",
        borderRadius: 25,
        justifyContent: "center",
        paddingHorizontal: 20
    },

    textInputStyle: {
        color: "#7F7F7F",
        fontSize: 14
    },

    passwordView: {
        marginTop: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },

    termsView: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    termsText: {
        color: "#7F7F7F",
        marginLeft: 15,
        fontSize: 14
    },

    signUpButton: {
        width: width - 30,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        marginTop: 25,
        borderColor: "#312F57",
        borderWidth: 2,
        borderRadius: 25
    },

    signUpText: {
        color: "#312F57",
        fontSize: 16,
        fontWeight: "700"
    },

    signInText: {
        color: "#7F7F7F",
        marginLeft: 15,
        fontSize: 14,
        marginTop: 25,
        alignSelf: "center"
    },

    errorText: {
        marginHorizontal: 15,
        color: "#ED1B2E",
        padding: 4,
        fontSize: 11,
    },

    passwordText: {
        color: "#7F7F7F",
        fontSize: 11,
        padding: 4,
        marginHorizontal: 15,
    },

})

export default styles;