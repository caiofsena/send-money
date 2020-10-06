import React from 'react';
import {Text, Image, View} from 'react-native';
import { List } from 'react-native-paper';
import styles from './styles';

const Contact = ({name, photo, phone, moneyValue}) => {
    return (
        <View style={styles.contact}>
            <List.Item
                titleStyle={styles.label}
                descriptionStyle={styles.label}
                title={name}
                description={phone}
                left={props => <Image source={{uri: photo}} resizeMode={'cover'} style={styles.photo} />}
                right={props => {
                    if(moneyValue){
                        return  <Text style={styles.labelMoney}>{moneyValue}</Text>
                    }
                }}
            />
        </View> 
    )
}

export default Contact;