import AsyncStorage from '@react-native-community/async-storage';

const StoreUser = {

    getStoreUser: async() => {
        let user = await AsyncStorage.getItem('user_hub');
        return JSON.parse(user);
    },

    setStoreUser: async(user) => {
        return await AsyncStorage.setItem('user_hub', JSON.stringify(user));
    },
    
    getStoreContact: async() => {
        let contact = await AsyncStorage.getItem('contact_hub');
        return JSON.parse(contact);
    },

    setStoreContact: async(contact) => {
        return await AsyncStorage.setItem('contact_hub', JSON.stringify(contact));
    },

    getStoreContacts: async() => {
        let contacts = await AsyncStorage.getItem('contacts_hub');
        return JSON.parse(contacts);
    },

    setStoreContacts: async(contacts) => {
        return await AsyncStorage.setItem('contacts_hub', JSON.stringify(contacts));
    },

    clear: async() => {
        await AsyncStorage.clear();
    }

}

export default StoreUser;