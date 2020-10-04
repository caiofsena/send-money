import React, {Component} from 'react';
import StoreMoney from '../../store/StoreMoney';
import {
    Text,
    FlatList,
    Image
} from "react-native";


export default class SendHistory extends Component {

    constructor(props) {
        super(props);
        this.state={
            historyTransaction: []
        };
    }

    async componentDidMount() {
        let storeHistoryTransaction = await StoreMoney.getStoreHistoryTransaction();
        if(storeHistoryTransaction){
            this.setState({
                historyTransaction: storeHistoryTransaction
            });
        }
    }

    componentWillUnmount() {}

    _renderItemContact = (item) => {
        return (
            <>
                <Image style={{width: 50, height: 50}} resizeMode={'cover'} source={{uri: item.photo}} />
                <Text>{item.name} - {item.phone}</Text>
            </>
        )
    }

    render() {
        let { historyTransaction } = this.state; 
        return (
            <>
                <FlatList 
                    data={historyTransaction}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({ item, index }) => this._renderItemContact(item)}
                />
            </>
        )
    }
}
