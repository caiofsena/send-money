import React, { Component } from 'react';
import { getContactsHub } from '../../api/users';
import StoreUser from '../../store/StoreUser';
import StoreMoney from '../../store/StoreMoney';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image, 
    FlatList,
    Fragment, 
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Alert,
    TextInput
} from "react-native";

export default class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state={
            contactsHub: [],
            contactHubSelected: {},
            historyTransaction: [],
            modalSendMoneyVisible: false,
        };
    }
    
    async componentDidMount() {
        let storeContacts = await StoreUser.getStoreContacts();
        if(!storeContacts){
            getContactsHub().then(async contactsHub => {
                this.setState({
                    contactsHub 
                });
                await StoreUser.setStoreContacts(contactsHub);
            });
        } else {
            this.setState({
                contactsHub: storeContacts
            });
        }
        // let { historyTransaction } = this.state; 
        // await StoreMoney.setStoreHistoryTransaction(historyTransaction);
    }
    
    componentDidUpdate() {}
    
    componentWillUnmount() {}
    
    _sendTransaction = async() => {
        let { contactHubSelected, modalSendMoneyVisible } = this.state;
        const newTransaction = {
            name: contactHubSelected.name,
            photo: contactHubSelected.photo,
            phone: contactHubSelected.phone
        }
        let historyTransaction = await StoreMoney.getStoreHistoryTransaction();
        if(historyTransaction != null){
            let { historyTransaction } = this.state; 
            await StoreMoney.setStoreHistoryTransaction(historyTransaction);
        }
        historyTransaction.push(newTransaction);
        this.setState({
            historyTransaction,
            modalSendMoneyVisible: !modalSendMoneyVisible
        });
        await StoreMoney.setStoreHistoryTransaction(historyTransaction);
    }
        
    _renderItemContact = (item, index, modalSendMoneyVisible) => {
        return (
            <>
                <TouchableOpacity onPress={() => {
                    this._renderModalContactHub(index, modalSendMoneyVisible);
                }}>
                    <Image style={{width: 50, height: 50}} resizeMode={'cover'} source={{uri: item.photo}} />
                    <Text>{item.name} - {item.phone}</Text>
                </TouchableOpacity>
            </>
        )
    }
    
    _renderModalContactHub = (index, modalSendMoneyVisible) => {
        let { contactsHub } = this.state; 
        this.setState({
            modalSendMoneyVisible: !modalSendMoneyVisible,
            contactHubSelected: contactsHub[index]
        });
    }
    
    render() {
        let { contactsHub, modalSendMoneyVisible, contactHubSelected } = this.state; 
        let moneyValue = 0;
        return (
            <>
                <FlatList 
                    data={contactsHub}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({ item, index }) => this._renderItemContact(item, index, modalSendMoneyVisible)}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalSendMoneyVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    this.setState({modalSendMoneyVisible: !modalSendMoneyVisible});
                                }}
                            >
                                <Text style={styles.textStyle}>x</Text>
                            </TouchableHighlight>
                            <Image style={{width: 50, height: 50}} resizeMode={'cover'} source={{uri: contactHubSelected.photo}} />
                            <Text style={styles.modalText}>{contactHubSelected.name}</Text>
                            <Text>Valor a enviar:</Text>
                            <TextInput placeholder="R$ 0,00" onChangeText={text => moneyValue = text} />
                            {/* <Button title="Enviar" onPress={this._sendTransaction()} /> */}
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={
                                    this._sendTransaction
                                }
                            >
                                <Text style={styles.textStyle}>Enviar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
             </>   
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
