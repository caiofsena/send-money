import React, { Component } from 'react';
import Contact from '../../Components/Contact/Contact'
import ModalSendMoney from '../../Components/ModalSendMoney/ModalSendMoney'
import { getContactsHub, generateToken } from '../../lib/api/ApiUser';
import { createTransfer, addToHistoryTransfers } from '../../lib/api/ApiMoney';
import StoreUser from '../../lib/store/StoreUser';
import StoreMoney from '../../lib/store/StoreMoney';
import {
    FlatList,
    TouchableOpacity,
    StatusBar
} from "react-native";
import styles from './styles';

export default class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state={
            contactsHub: [],
            contactHubSelected: {},
            historyTransfers: [],
            modalSendMoneyVisible: false
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
    
    _sendMoney = async(money) => {
        let { contactHubSelected, modalSendMoneyVisible } = this.state;
        let id = await StoreMoney.getIdTransaction();
        let token = await generateToken();
        const newTransaction = {
            clientId: id,
            clienteName: contactHubSelected.name,
            clientPhoto: contactHubSelected.photo,
            clientPhone: contactHubSelected.phone,
            token: token,
            moneyValue: money
        }
        await createTransfer(newTransaction);
        let historyTransfers = await addToHistoryTransfers(newTransaction);
        this.setState({
            historyTransfers,
            modalSendMoneyVisible: !modalSendMoneyVisible
        });
        await StoreMoney.setStoreHistoryTransaction(historyTransfers);
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
                    style={styles.list}
                />
                <ModalSendMoney
                    modalSendMoneyVisible={modalSendMoneyVisible} 
                    contactHubSelected={contactHubSelected} 
                    updateModalSendMoneyVisible={this._updateModalSendMoneyVisible}
                    sendMoney={this._sendMoney}
                />
             </>   
        )
    }
}