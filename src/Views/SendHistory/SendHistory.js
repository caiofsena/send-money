import React, {Component} from 'react';
import { getTransactions } from '../../api/money';
import {
    Text,
    FlatList,
    Image,
    StatusBar,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native";
import Contact from '../../Components/Contact';


export default class SendHistory extends Component {

    constructor(props) {
        super(props);
        this.state={
            historyTransaction: []
        };
    }

    async componentDidMount() {
        let storeHistoryTransaction = await getTransactions();
        if(storeHistoryTransaction){
            this.setState({
                historyTransaction: storeHistoryTransaction
            });
        }
    }

    componentWillUnmount() {}

    _renderItemContact = (item) => {
        return (
            <View>
                <TouchableOpacity>
                    <Contact name={item.clienteName} photo={item.clientPhoto} phone={item.clientPhone} moneyValue={item.moneyValue} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        let { historyTransaction } = this.state; 
        return (
            <>
                <StatusBar
                    backgroundColor="#2196F3"
                    barStyle="light-content"
                />
                <FlatList 
                    data={historyTransaction}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({ item, index }) => this._renderItemContact(item)}
                    style={{backgroundColor: "#2196F3"}}
                />
            </>
        )
    }
}