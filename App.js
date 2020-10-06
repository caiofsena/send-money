import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import Hub from './src/Views/Hub/Hub'
import SendHistory from './src/Views/SendHistory/SendHistory'
import SendMoney from './src/Views/SendMoney/SendMoney'

export default function App() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {cardStyle: styles.container}
            }>
                <Stack.Screen name="Hub"
                    component={Hub}
                    options={
                        {headerShown: false}
                    }/>
                <Stack.Screen name="SendMoney"
                    component={SendMoney}
                    options={
                        {
                            title: 'Enviar Dinheiro',
                            headerStyle: styles.stackScreenHeader,
                            headerTitleStyle: styles.stackScreenHeaderTitle,
                            headerBackTitleStyle: styles.stackScreenHeaderBack
                        }
                    }/>
                <Stack.Screen name="SendHistory"
                    component={SendHistory}
                    options={
                        {
                            title: 'Histórico de Envios',
                            headerStyle: styles.stackScreenHeader,
                            headerTitleStyle: styles.stackScreenHeaderTitle,
                            headerBackTitleStyle: styles.stackScreenHeaderBack,
                        }
                    }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    stackScreenHeader: {
        backgroundColor: '#2196F3'
    },
    stackScreenHeaderTitle: {
        color: 'white'
    },
    stackScreenHeaderBack: {
        backgroundColor: 'white'
    }
});
