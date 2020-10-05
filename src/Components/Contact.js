import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
    contact:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "white",
        borderBottomWidth: 0.2,
        color: 'white'
    },
    photo:{
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 30
    },
    containerLabel: {
        flexDirection: "column",
    },
    label: {
        fontFamily: "Roboto",
        color: 'white'
    }
});

export default Contact;