import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import { getUserHub } from '../../api/users'

export default class Hub extends Component {

    constructor(props) {
        super(props);
        this.state={
            userHub: {}
        }
    }

    componentDidMount() {
        getUserHub().then(async userHub => {
            this.setState({
                userHub 
            });
        });
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    toSendMoney = () => {
        this.props.navigation.navigate('SendMoney');
    }

    toSendHistory = () => {
        this.props.navigation.navigate('SendHistory');
    }

    render() {

        let { userHub } = this.state;
        return (
            <View>
                <Image source={{uri:userHub.photo}} />
                <Text>{userHub.name}</Text>
                <Button title="Send Money" onPress={this.toSendMoney} />
                <Button title="Send History" onPress={this.toSendHistory} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
