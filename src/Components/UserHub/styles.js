import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    containerHub: {
        flex: 1,
        alignItems: 'center',
        width: largura*0.8
    },
    photo:{
        width: largura*0.4,
        height: largura*0.4,
        marginTop: largura*0.1,
        borderRadius: 80
    },
    text:{
        color: 'white'
    },
    containerButtons: {
        flex: 1,
        justifyContent: 'center',
        marginTop: largura*0.4
    },
    buttons: {
        width: largura*0.8,
        height: largura*0.12,
        backgroundColor: '#4DAFFF',
        borderRadius: 20,
        margin: largura*0.02
    }
});

export default styles