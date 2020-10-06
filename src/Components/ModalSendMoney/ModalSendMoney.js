import React from 'react';
import { useState } from 'react';
import {Text, TextInput, Image, View, Modal, TouchableHighlight, Dimensions, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles';

const ModalSendMoney = ({modalSendMoneyVisible, contactHubSelected, updateModalSendMoneyVisible, sendMoney}) => {
    const [moneyValue, setMoneyValue] = useState('');
    const largura = Dimensions.get("screen").width;
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalSendMoneyVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => {updateModalSendMoneyVisible()}}
                    >
                        <List.Icon color="white" icon="close" />
                    </TouchableOpacity>
                    <Image style={styles.photo} resizeMode={'cover'} source={{uri: contactHubSelected.photo}} />
                    <Text style={styles.text}>{contactHubSelected.name}</Text>
                    <Text style={styles.text}>{contactHubSelected.phone}</Text>
                    <Text style={{...styles.text, fontSize: largura*0.04}}>Valor a enviar:</Text>
                    <TextInputMask
                        type={'money'}
                        style={styles.input}
                        value={moneyValue}
                        onChangeText={text => {
                            setMoneyValue(text)
                        }}
                        />
                    <TouchableHighlight
                        style={styles.sendButton}
                        onPress={() => {
                            sendMoney(moneyValue)
                        }}
                    >
                        <Text style={styles.sendButtonText}>Enviar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default ModalSendMoney;