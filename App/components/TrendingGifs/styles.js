import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10
    },
    headerTitle: {
        color: "#fff",
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: "600",
    },
    more: {
        color: "#A6A6A6",
        fontSize: 16,
        paddingRight: 5,
        fontWeight: "600",
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 3,
        marginHorizontal: 10
    },
})

export default styles;