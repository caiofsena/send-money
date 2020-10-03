import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View, Button} from 'react-native';
import Hub from './src/Views/Hub/Hub'
import SendHistory from './src/Views/SendHistory/SendHistory'
import SendMoney from './src/Views/SendMoney/SendMoney'

export default function App() { 
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{cardStyle: styles.container}}>
                <Stack.Screen name="Hub"
                    component={Hub} options={
                        {headerShown: false}
                }/>
                <Stack.Screen name="SendMoney"
                    component={SendMoney} options={{title: 'Enviar Dinheiro'}}/>
                <Stack.Screen name="SendHistory"
                    component={SendHistory} options={{title: 'Histórico de Envios'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center'
    }
});
