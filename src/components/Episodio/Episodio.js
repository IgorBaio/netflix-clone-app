import React from 'react'

import { Text, StyleSheet, View, FlatList, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import { Caption, Title } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    capa:{
        width:130,
        height:70,
        marginRight:10
    }

});


export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.capa} source={{ uri: 'https://i.imgur.com/lVj3vnw.jpg' }} />
                <View>
                    <Title style={{fontSize:15}}>1. Nome do Episódio</Title>
                    <Caption>45 mins</Caption>
                </View>
            </View>
            <Caption>Excelente motorista, ele é o piloto de fuga oficial dos assaltos de Doc (Kevin Spacey), mas não vê a hora de deixar o cargo, principalmente depois que se vê apaixonado pela garçonete Debora (Lily James).</Caption>
        </View>
    )
}