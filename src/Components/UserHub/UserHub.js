import React, { Fragment } from 'react';
import {Text, Image, Button, View} from 'react-native';
import styles from './styles';

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

export default UserHub;