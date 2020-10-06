import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import styles from './styles';

const Contact = ({name, photo, phone, moneyValue}) => {
    return (
        <View style={styles.contact}>
            <Image
            source={{uri: photo}}
            resizeMode={'cover'}
            style={styles.photo} />
            <View style={styles.containerLabel}>
                <Text style={styles.label}>{name}</Text>
                <Text style={styles.label}>{phone}</Text>
                {moneyValue && <Text style={styles.label}>R$ {moneyValue}</Text>}
            </View>
        </View> 
    )
}

export default Contact;