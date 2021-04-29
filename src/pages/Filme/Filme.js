import React, { useState } from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from "react-native";
import { Button, Caption, Paragraph, Title } from 'react-native-paper';
import ButtonVertical from '../../components/ButtonVertical/Button'
import Secao from '../../components/Secao/Secao';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Episodio from '../../components/Episodio/Episodio';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#000'
    },
    hero: {
        height: 200,
        width: '100%'
    },
    containerPadding: {
        padding: 20
    },
    buttonPlay: {
        marginVertical: 20
    },
    captionInfos: {
        marginTop: 20
    },
    menu: {
        flexDirection: 'row',
        width: '100%',
        height: 38,
        justifyContent: 'space-between',
        marginVertical: 20
    },
    captionWhite: {
        color: '#fff'
    },
    buttonTemporada: {
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.21)',
        width: '100%',
        padding: 10,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20

    },
    temporadaName: {
        color: '#fff'
    },
})

export default () => {
    const [tipo] = useState('serie')
    const [visible,setVisible] = useState(false)
    const [temporada,setTemporada] = useState({value:1, label: 'Temporada 1'})
    return (
        <>
            <ScrollView style={styles.container}>
                <ImageBackground source={{ uri: 'https://i.imgur.com/DWxcN6m.jpg' }} style={styles.hero} />
                <View style={styles.containerPadding}>
                    <Title >Nome do Filme</Title>
                    <Button
                        style={styles.buttonPlay}
                        mode='contained'
                        icon='play'
                        color="#fff"
                        uppercase={false}
                    >
                        Assistir
                </Button>

                    <Paragraph>
                        Excelente motorista, ele é o piloto de fuga oficial dos assaltos de Doc (Kevin Spacey), mas não vê a hora de deixar o cargo, principalmente depois que se vê apaixonado pela garçonete Debora (Lily James).
                </Paragraph>

                    <Caption style={styles.captionInfos}>
                        Elenco: <Caption style={styles.captionWhite}>Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael Lopes.</Caption>
                    Gêneros: <Caption style={styles.captionWhite}>Ação, Aventura, Dramático.</Caption> Cenas e momentos: <Caption style={styles.captionWhite}>Violentos.</Caption>
                    </Caption>

                    <View style={styles.menu}>
                        <ButtonVertical nameIcon='plus' textIcon='Minha Lista' />
                        <ButtonVertical nameIcon='thumb-up' textIcon='Classifique' />
                        <ButtonVertical nameIcon='send' textIcon='Compartilhe' />
                        <ButtonVertical nameIcon='download' textIcon='Baixar' />
                    </View>

                    {tipo === 'filme' && <Secao hasTopBorder />}
                    {tipo === 'serie' && (
                        <>
                            <TouchableOpacity style={styles.buttonTemporada} onPress={() => setVisible(true)}>
                                <Text style={styles.temporadaName}>{temporada.label}</Text>
                                <Icon name='chevron-down' size={20} color='#fff' />
                            </TouchableOpacity>
                            <ScrollView>

                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Episodio />
                                ))}
                            </ScrollView>
                        </>)}

                </View>



            </ScrollView>
            <SinglePickerMaterialDialog
                title={'Série - Temporadas'}
                items={[
                    {value:1, label: 'Temporada 1'},
                    {value:2, label: 'Temporada 2'},
                    {value:3, label: 'Temporada 3'}
                ]}
                visible={visible}
                selectedItem={temporada}
                onCancel={()=>setVisible(false)}
                onOk={result => {
                    setVisible(false)
                    setTemporada(result.selectedItem)
                }}
            />
        </>
    )
}