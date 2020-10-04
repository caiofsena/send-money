import AsyncStorage from '@react-native-community/async-storage';

const StoreMoney = {

    getStoreTransaction: async() => {
        let transaction = await AsyncStorage.getItem('money_transaction');
        return JSON.parse(transaction);
    },

    setStoreTransaction: async(transaction) => {
        return await AsyncStorage.setItem('money_transaction', JSON.stringify(transaction));
    },

    getStoreHistoryTransaction: async() => {
        let historyTransaction = await AsyncStorage.getItem('money_history_transaction');
        return JSON.parse(historyTransaction);
    },

    setStoreHistoryTransaction: async(historyTransaction) => {
        return await AsyncStorage.setItem('money_history_transaction', JSON.stringify(historyTransaction));
    }
    
}

export default StoreMoney;