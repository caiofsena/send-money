import React, { Fragment } from 'react';
import {Text, Image, Button, View, StyleSheet, Dimensions} from 'react-native';

const UserHub = ({userHub, toSendMoney, toSendHistory, clear}) => {
    return (
        <View style={styles.containerHub}>
            <Image style={styles.photo} resizeMode={'cover'} source={{uri:userHub.photo}} />
            <Text style={styles.text}>{userHub.name}</Text>
            <View style={styles.containerButtons}>
                <Button style={styles.buttons} title="Enviar Dinheiro" onPress={toSendMoney} />
                <Button style={styles.buttons} title="Histórico de Envios" onPress={toSendHistory} />
                <Button style={styles.buttons} title="Limpar Dados" onPress={clear} />
            </View>
        </View>
    )
}

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    containerHub: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: largura*0.8
    },
    containerButtons: {
        flex: 1,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        width: largura*0.7,
    },
    photo:{
        width: largura*0.4,
        height: largura*0.4,
        margin: largura*0.2,
        borderRadius: 80
    },
    text:{
        height: largura*0.4,
        color: 'white',
        marginBottom: largura*0.02 
    },
    buttons: {
        height: 50
    },
});

export default UserHub;