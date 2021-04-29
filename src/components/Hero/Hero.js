import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'

export default () => {

    return (
        <ImageBackground
            source={{ uri: 'https://i.imgur.com/lVj3vnw.jpg' }}
            style={styles.hero}
        >
            <Image resizeMode='contain' source={{ uri: 'https://i.imgur.com/OWF2nWF.png' }} style={styles.logo} />
            <View style={styles.containerTop10}>
                <Image resizeMode='contain' style={styles.top10Badge} source={require('../../assets/badge-top-10.png')} />
                <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
            </View>
            <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    hero: {
        height: 400,
        width: '100%'
    },
    logo: {
        marginTop: 200,
        alignSelf: 'center',
        width: 300,
        height: 150,
        position: 'absolute',
        zIndex: 10
    },
    containerTop10: {
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    top10Badge: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    top10Text: {
        fontSize: 15,
        color: '#fff'
    }, 
    gradient: {
        width:'100%',
        height:150,
        position:'absolute',
        zIndex:9,
        bottom:0
    }
});
