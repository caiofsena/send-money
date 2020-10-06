import AsyncStorage from '@react-native-community/async-storage';

const ids = {
    TRANSACTION_INITIAL: 0
};

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
    },
    
    getIdTransaction: async() => {
        let idTransaction = await AsyncStorage.getItem('money_id_transaction');
        if(idTransaction){
            await AsyncStorage.setItem('money_id_transaction', JSON.stringify(parseInt(idTransaction)+1));
        } else {

            await AsyncStorage.setItem('money_id_transaction', JSON.stringify(ids.TRANSACTION_INITIAL+1));
        }
        return await AsyncStorage.getItem('money_id_transaction');
    },
}

export default StoreMoney;