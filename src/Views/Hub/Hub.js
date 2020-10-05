import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Fragment,
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

const largura = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196F3',
        alignItems: 'center',
    },
    containerHub: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: largura*0.8
    },
    containerButtons: {
        flex: 1,
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        width: largura*0.7,
    },
    photo:{
        width: largura*0.4,
        height: largura*0.4,
        margin: largura*0.2,
        borderRadius: 80
    },
    text:{
        height: largura*0.4,
        color: 'white',
        marginBottom: largura*0.02 
    },
    buttons: {
        height: 50
    },
});
