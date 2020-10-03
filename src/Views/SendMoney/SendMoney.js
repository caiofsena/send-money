import React, {Component} from 'react';
import { getContactsHub } from '../../api/users'
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image, 
    FlatList,
    Fragment
} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

export default class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state={
            contactsHub: {}
        };
    }

    componentDidMount() {
        getContactsHub().then(async contactsHub => {
            this.setState({
                contactsHub 
            });
        });
    }

    componentWillUnmount() {}

    render() {
        let { contactsHub } = this.state; 
        console.warn(contactsHub);
        return (
            <>
                <Text>Teste</Text>
                <FlatList 
                    data={contactsHub}
                    keyExtractor={(item, index)=>index}
                    renderItem={({ item }) => (
                        <Fragment>
                            <Text>Teste</Text>
                        </Fragment>
                    )}
                    />
            </>
        )
    }
}
