import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get('window').height - 180;
const styles = StyleSheet.create({
    safeViewTop: {
        backgroundColor: "#312F57",
        flex: 0,
    },

    container: {
        flex: 1,
        backgroundColor: "#312F57"
    },

    textStyle: { fontSize: 18, fontWeight: "500", color: "#7F7F7F", },
    OtpInputView: {
        marginHorizontal: 20,
        flex: 1, height: HEIGHT * 0.2
    },
    otpContainer: {
        width: width * 0.2,
        height: 45,
        backgroundColor: "#DFDFDF",
        borderRadius: 8,
        color: "#312F57",
        fontSize: 15,
    },
    resendView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 18
    },

    dontgetText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#7F7F7F"
    },

    resendText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#5D5B8E"
    },
    resend: {
        fontSize: 14,
        lineHeight: 20,
        color: "#312F57"
    },
    buttonView: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        width: width - 30,
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        marginTop: 18,
        borderColor: "#312F57",
        borderWidth: 2,
        borderRadius: 25
    },
    buttonText: {
        color: "#312F57",
        fontSize: 16,
        fontWeight: "700"
    },

})

export default styles;