import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";
import { getUserHub } from '../../api/users'
import StoreUser from '../../store/StoreUser';

export default class Hub extends Component {

    constructor(props) {
        super(props);
        this.state={
            userHub: {}
        }
    }

    async componentDidMount() {
        let storeUser = await StoreUser.getStoreUser();
        if(!storeUser){
            getUserHub().then(async userHub => {
                this.setState({
                    userHub 
                });
                await StoreUser.setStoreUser(userHub);
            });
        } else {
            this.setState({
                userHub: storeUser
            });
        }
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    _toSendMoney = () => {
        this.props.navigation.navigate('SendMoney');
    }

    _toSendHistory = () => {
        this.props.navigation.navigate('SendHistory');
    }

    _clear = async () => {
        await StoreUser.clear();
    }

    render() {

        let { userHub } = this.state;
        return (
            <View>
                <Image style={{width: 100, height: 100}} resizeMode={'cover'} source={{uri:userHub.photo}} />
                <Text>{userHub.name}</Text>
                <Button title="Send Money" onPress={this._toSendMoney} />
                <Button title="Send History" onPress={this._toSendHistory} />
                <Button title="Clear" onPress={this._clear} />
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
