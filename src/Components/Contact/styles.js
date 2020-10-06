import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    contact:{
        borderBottomColor: "white",
        borderBottomWidth: 0.2
    },
    photo:{
        width: largura*0.15,
        height: largura*0.15,
        margin: largura*0.01,
        borderRadius: 30
    },
    label: {
        color: 'white'
    },
    labelMoney: {
        color: 'white',
        marginTop: largura*0.05
    }
});

export default styles