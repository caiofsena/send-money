import React, { Fragment } from 'react';
import {Text, Image, View} from 'react-native';
import { Button, Title } from 'react-native-paper';
import styles from './styles';

const UserHub = ({userHub, toSendMoney, toSendHistory, clear}) => {
    return (
        <View style={styles.containerHub}>
            <Image style={styles.photo} resizeMode={'cover'} source={{uri:userHub.photo}} />
            <Title style={styles.text}>{userHub.name}</Title>
            <Text style={styles.text}>{userHub.email}</Text>
            <View style={styles.containerButtons}>
                <Button style={styles.buttons} icon="cash-multiple" mode="contained" onPress={toSendMoney}>Enviar Dinheiro</Button>
                <Button style={styles.buttons} icon="history" mode="contained" onPress={toSendHistory}>Histórico de Envios</Button>
                {/* <Button style={styles.buttons} icon="cancel" mode="contained" onPress={clear}>Limpar Dados</Button> */}
            </View>
        </View>
    )
}

export default UserHub;