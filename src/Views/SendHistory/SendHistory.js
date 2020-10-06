import React, {Component} from 'react';
import { getTransfers } from '../../lib/api/ApiMoney';
import {
    FlatList,
    StatusBar,
    View,
    TouchableOpacity
} from "react-native";
import Contact from '../../Components/Contact/Contact';
import styles from './styles';


export default class SendHistory extends Component {

    constructor(props) {
        super(props);
        this.state={
            historyTransfers: []
        };
    }

    async componentDidMount() {
        let storeHistoryTransfers = await getTransfers();
        if(storeHistoryTransfers){
            this.setState({
                historyTransfers: storeHistoryTransfers
            });
        }
    }

    componentWillUnmount() {}

    _renderItemContact = (item) => {
        return (
            <Contact name={item.clienteName} photo={item.clientPhoto} phone={item.clientPhone} moneyValue={item.moneyValue} />
        )
    }

    render() {
        let { historyTransfers } = this.state; 
        return (
            <>
                <StatusBar
                    backgroundColor="#2196F3"
                    barStyle="light-content"
                />
                <FlatList 
                    data={historyTransfers}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({ item, index }) => this._renderItemContact(item)}
                    style={styles.list}
                />
            </>
        )
    }
}