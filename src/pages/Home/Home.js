import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Button, Title } from 'react-native-paper';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ButtonVertical from '../../components/ButtonVertical/Button'
import Previas from '../../components/Previas/Previas';
import Secao from '../../components/Secao/Secao';

export default () => {

    const [credenciais, setCredenciais] = useState({ email: '', senha: '' })

    return (
        <View style={styles.container}>
            <ScrollView>
                <>
                    <Header />
                    <Hero />
                    <View style={styles.menuHeader}>
                        <ButtonVertical nameIcon='plus' textIcon='Minha Lista' />

                        <Button
                            mode='contained'
                            icon='play'
                            color="#fff"
                            uppercase={false}
                        >
                            Assistir
                </Button>

                        <ButtonVertical nameIcon='information-outline' textIcon='Saiba mais' />
                    </View>

                    <View style={styles.previaContainer}>
                        <Title style={styles.previaTitle}>Prévias</Title>
                        <Previas />

                    </View>
                </>
                {[1,2,3,4].map((secao, index)=>(
                    <Secao hasTopBorder={index === 0 ? true : null } />
                ))}
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 15,
        alignItems: 'center',
    },
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
    flatListContainer: {
        width: '100%',
        height: 100,
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: '#f90'
    },


});
