import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default ({ nameIcon, textIcon }) => {

    return (
        <TouchableOpacity style={styles.menuButton}>
            <Icon name={nameIcon} color='#fff' size={20} />
            <Text style={styles.buttonText}>{textIcon}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuHeader: {
        width: '100%',
        height: 38,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    buttonText: {
        color: '#FFF'
    },
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 100
    },
});
