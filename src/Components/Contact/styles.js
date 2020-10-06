import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contact:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 0.2,
        color: 'white'
    },
    photo:{
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 30
    },
    containerLabel: {
        flexDirection: "column",
    },
    label: {
        fontFamily: "Roboto",
        color: 'white'
    }
});

export default styles