import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default () => {

    const [credenciais, setCredenciais] = useState({ email: '', senha: '' })

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <View>
                <TextInput
                    mode='flat'
                    label='E-mail ou número de telefone'
                    style={styles.marginBottom}
                    value={credenciais.email}
                    onChangeText={(text) => setCredenciais({ ...credenciais, email: text })} />

                <TextInput
                    mode='flat'
                    label='Senha'
                    secureTextEntry
                    style={styles.marginBottom}
                    value={credenciais.senha}
                    onChangeText={(text) => setCredenciais({ ...credenciais, senha: text })} />

                <Button
                    mode='contained'
                    style={[styles.marginBottom, styles.button]}
                    onPress={() => console.log('pressed')}
                >
                    Entrar
                    </Button>

                <Button
                    mode='text'
                    style={[styles.marginBottom, styles.buttonRecuperar]}
                    onPress={() => console.log('pressed')}
                    theme={{colors:{primary:'#FFF'}}}
                >
                    Recuperar Senha
                    </Button>

                <Text style={styles.textSmall}>
                    O acesso está protegido pelo Google reCAPTCHA para garantir que você
                    não é um robo. Saiba mais.
          </Text>

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 100
    },
    marginBottom: {
        marginBottom: 20
    },
    button: {
        backgroundColor: '#E50014'
    },
    textSmall:{
        color:'rgba(255,255,255,0.6)',
        textAlign:'center',
        marginTop:30
    }
});
