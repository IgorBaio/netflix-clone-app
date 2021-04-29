import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import { LogBox, StyleSheet, View } from 'react-native';

export default () => {

  LogBox.ignoreLogs([
    'Each child',
  ])

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:'#E50914',
      background:'#3c3c3c',
      placeholder:'#fff',
      text:'#fff'
    }
  }
  return (
        <PaperProvider theme={theme}>
          <StatusBar style="auto" />
            {/* <Login /> */}
            <View style={styles.container}>

              <Home />
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    top:50,
    justifyContent:'center'
  },
});
