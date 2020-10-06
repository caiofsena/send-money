import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from "react-native";
import { getUserHub } from '../../api/user'
import UserHub from '../../Components/UserHub';
import StoreUser from '../../store/StoreUser';

export default class Hub extends Component {

    constructor(props) {
        super(props);
        this.state={
            userHub: {}
        }
    }

    async componentDidMount() {
        let storeUser = await getUserHub();
        this.setState({
            userHub: storeUser
        });
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
            <View  style={styles.container}>
                <StatusBar
                    backgroundColor="#2196F3"
                    barStyle="light-content"
                />
                <UserHub 
                    userHub={userHub} 
                    toSendMoney={this._toSendMoney} 
                    toSendHistory={this._toSendHistory} 
                    clear={this._clear} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196F3',
        alignItems: 'center',
    }
});
