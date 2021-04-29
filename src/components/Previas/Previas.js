import React from 'react';

import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
export default () => (

    <ScrollView horizontal>

        {[1, 2, 3, 4, 5, 6].map(({ item, index }) => (
            <TouchableOpacity key={index} style={{ marginLeft: index === 0 ? 20 : 0, marginRight: 10 }}>
                <View style={styles.oval}>
                    <Image style={styles.capa} source={{ uri: 'https://i.imgur.com/lDcF7c6.jpg' }} />
                    <Image style={styles.logo} resizeMode='contain' source={{ uri: 'https://i.imgur.com/nI9wuJF.png' }} />
                    <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
                </View>
            </TouchableOpacity>
        ))}

    </ScrollView>
)

const styles = StyleSheet.create({
    oval: {
        backgroundColor: '#E50014',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius: 90

    },
    capa: {
        height: 85,
        width: 85,
        borderRadius: 85
    },
    logo: {
        width: 90,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 10,
        alignSelf: 'center'
    },
    previaContainer: {
        width: '100%',
        marginTop: 50
    },
    previaTitle: {
        marginLeft: 20
    },
    gradient: {
        width: '100%',
        height: 60,
        position: 'absolute',
        zIndex: 9,
        bottom: 10
    }

});
