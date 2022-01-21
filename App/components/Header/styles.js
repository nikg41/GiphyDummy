import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#252525",
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    backIconView: {
        position: "absolute",
        left: 15,
        height: 50,
        width: 50,
        justifyContent: "center"
    },

    headerTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 21
    },
})

export default styles;