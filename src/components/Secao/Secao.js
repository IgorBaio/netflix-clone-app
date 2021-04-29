import React from 'react'

import { Text, StyleSheet, View, FlatList, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import { Title } from 'react-native-paper';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10
    },
    secaoTitle: {
        marginLeft: 20
    },
    lista: {
        width: '100%',
        height: 180,
        marginTop: 10,
        marginBottom: 30,
    },
    capa: {
        width: 120,
        height: 180,
        borderRadius: 4,
        overflow: 'hidden'
    },
    logo: {
        height: 45,
        width: 100,
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        alignSelf: 'center'
    },
    borderTop:{
        top:15,
        backgroundColor:'#E50014',
        height:3,
        width:100,
        left:20,
        marginBottom:10
    }

});


export default ({hasTopBorder}) => {
    return (
        <View style={styles.container}>
            {hasTopBorder && <View style={styles.borderTop}/>}
            <Title style={styles.secaoTitle}>Nome da Seção</Title>
            <ScrollView horizontal>

                {[1, 2, 3, 4, 5].map((item, index)=>(
                    <TouchableOpacity key={index}>
                        <ImageBackground
                            source={{ uri: 'https://i.imgur.com/DWxcN6m.jpg' }}
                            style={
                                [
                                    styles.capa,
                                    { 
                                        marginRight: 10, 
                                        marginLeft: index === 0 ? 20 : 0 }]}>
                            <Image resizeMode='contain' style={styles.logo} source={{ uri: 'https://i.imgur.com/nXaKDhu.png' }} />
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}