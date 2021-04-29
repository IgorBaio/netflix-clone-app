import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'

export default () => {

    return (
        <LinearGradient style={styles.header} colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
            <View style={styles.headerSafeAreaView}>
                <Image source={require('../../assets/logo-compact.png')} />
                <TouchableOpacity>
                    <Text style={styles.text}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Minha Lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999
    },
    text: {
        color: '#fff'
    },
    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 70,
        alignItems: 'center'
    }
});
