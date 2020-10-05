import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import {Text, TextInput, Image, View, StyleSheet, Modal, TouchableHighlight, Dimensions} from 'react-native';

const ModalSendMoney = ({modalSendMoneyVisible, contactHubSelected, updateModalSendMoneyVisible, updateMoneyValue, sendTransaction}) => {
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

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: largura*0.7,
        margin: 20,
        backgroundColor: "#4DAFFF",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    sendButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        width: largura*0.6,
        height: largura*0.13,
    },
    closeButton: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        alignSelf: 'baseline'
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: largura*0.06
    },
    photo:{
        width: largura*0.2,
        height: largura*0.2,
        borderRadius: 80
    },
    text: {
        width: largura*0.7,
        height: largura*0.1,
        textAlign: "center",
        color: 'white',
        fontSize: largura*0.05
    },
    input: {
        width: largura*0.6,
        height: largura*0.13,
        margin: 10,
        textAlign: "center",
        backgroundColor: 'white',
        fontSize: largura*0.06
    }
  });


export default ModalSendMoney;