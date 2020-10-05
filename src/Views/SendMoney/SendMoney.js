import React, { Component } from 'react';
import Contact from '../../Components/Contact'
import ModalSendMoney from '../../Components/ModalSendMoney'
import { getContactsHub, getToken } from '../../api/user';
import { createTransaction, addToHistoryTransaction } from '../../api/money';
import StoreUser from '../../store/StoreUser';
import StoreMoney from '../../store/StoreMoney';
import {
    FlatList,
    TouchableOpacity,
    StatusBar
} from "react-native";

export default class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state={
            contactsHub: [],
            contactHubSelected: {},
            historyTransaction: [],
            moneyValue: 0,
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
    }
    
    componentDidUpdate() {}
    
    componentWillUnmount() {}
    
    _sendTransaction = async() => {
        let { contactHubSelected, modalSendMoneyVisible, moneyValue } = this.state;
        let id = await StoreMoney.getIdTransaction();
        let token = await getToken();
        const newTransaction = {
            clientId: id,
            clienteName: contactHubSelected.name,
            clientPhoto: contactHubSelected.photo,
            clientPhone: contactHubSelected.phone,
            token: token,
            moneyValue: moneyValue
        }
        await createTransaction(newTransaction);
        let historyTransaction = await addToHistoryTransaction(newTransaction);
        this.setState({
            historyTransaction,
            modalSendMoneyVisible: !modalSendMoneyVisible
        });
        await StoreMoney.setStoreHistoryTransaction(historyTransaction);
        this.props.navigation.navigate('Hub');
    }
        
    _renderItemContact = (item, index, modalSendMoneyVisible) => {
        return (
            <>
                <TouchableOpacity onPress={() => {
                    this._renderModalContactHub(index, modalSendMoneyVisible);
                }}>
                    <Contact name={item.name} photo={item.photo} phone={item.phone} />
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

    _updateMoneyValue = (moneyValue) => {
        this.setState({
            moneyValue
        })
    }

    _updateModalSendMoneyVisible = () => {
        this.setState({
            modalSendMoneyVisible: !this.state.modalSendMoneyVisible
        })
    }
    
    render() {
        let { contactsHub, modalSendMoneyVisible, contactHubSelected } = this.state; 
        return (
            <>
                <StatusBar
                    backgroundColor="#2196F3"
                    barStyle="light-content"
                />
                <FlatList 
                    data={contactsHub}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({ item, index }) => this._renderItemContact(item, index, modalSendMoneyVisible)}
                    style={{backgroundColor: "#2196F3"}}
                />
                <ModalSendMoney
                    modalSendMoneyVisible={modalSendMoneyVisible} 
                    contactHubSelected={contactHubSelected} 
                    updateModalSendMoneyVisible={this._updateModalSendMoneyVisible}
                    updateMoneyValue={this._updateMoneyValue}
                    sendTransaction={this._sendTransaction}
                />
             </>   
        )
    }
}