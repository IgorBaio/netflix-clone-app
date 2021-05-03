import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import Filme from './src/pages/Filme/Filme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PaginaFake from './src/pages/PaginaFake/PaginaFake';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            activeColor='#fff'
            barStyle={{backgroundColor:'#141414'}}
            shifting={false}
        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel:'Início', tabBarIcon:({color})=>(
                    <Icon name='home' color={color} size={26}/>
                )
            }} />
            <Tab.Screen name='buscar' component={PaginaFake} options={{
                tabBarLabel:'Buscar', tabBarIcon:({color})=>(
                    <Icon name='magnify' color={color} size={26}/>
                )
            }} />
            <Tab.Screen name='emBreve' component={PaginaFake} options={{
                tabBarLabel:'Em Breve', tabBarIcon:({color})=>(
                    <Icon name='play-speed' color={color} size={26}/>
                )
            }} />
            <Tab.Screen name='downloads' component={PaginaFake} options={{
                tabBarLabel:'Downloads', tabBarIcon:({color})=>(
                    <Icon name='download' color={color} size={26}/>
                )
            }} />
            <Tab.Screen name='mais' component={PaginaFake} options={{
                tabBarLabel:'Mais', tabBarIcon:({color})=>(
                    <Icon name='menu' color={color} size={26}/>
                )
            }} />
        </Tab.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen options={{headerShown: false}} name="HomeTabs" component={HomeTabs} />
                <Stack.Screen options={{headerShown: false}} name="Filme" component={Filme} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}