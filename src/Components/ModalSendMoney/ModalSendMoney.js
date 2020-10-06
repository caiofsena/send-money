import React from 'react';
import {Text, TextInput, Image, View, Modal, TouchableHighlight} from 'react-native';
import styles from './styles';

const ModalSendMoney = ({modalSendMoneyVisible, contactHubSelected, updateModalSendMoneyVisible, moneyValue, updateMoneyValue, sendTransaction}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalSendMoneyVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableHighlight
                        style={styles.closeButton}
                        onPress={() => {
                            updateModalSendMoneyVisible()
                        }}
                    >
                        <Text style={styles.buttonText}>x</Text>
                    </TouchableHighlight>
                    <Image style={styles.photo} resizeMode={'cover'} source={{uri: contactHubSelected.photo}} />
                    <Text style={styles.text}>{contactHubSelected.name}</Text>
                    <Text style={styles.text}>{contactHubSelected.phone}</Text>
                    <Text style={{...styles.text, fontSize: largura*0.04}}>Valor a enviar:</Text>
                    <TextInput style={styles.input} placeholder="R$ 0,00"  onChangeText={value => updateMoneyValue(value)} />
                    <TouchableHighlight
                        style={styles.sendButton}
                        onPress={
                            sendTransaction
                        }
                    >
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default ModalSendMoney;