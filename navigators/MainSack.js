import { createStackNavigator, screenOption } from '@react-navigation/stack';
import React from 'react';
import { ScreenLogin } from '../componentes/AppAula1';
import { style } from './../componentes/LoginScreen/style';
import { FilmesEmCartaz } from '../componentes/FIlmesEmCartaz';


const MainStack = createStackNavigator();

export const ScreenMain = () => {
    return(
    <MainStack.Navigator screenOption={{
        gestureEnabled: true,
        gestureDirection:"horizontal"
        }
    }>
        <MainStack.Screen  name="Login" component={ScreenLogin} options={{
            headerTitleAlign:'center',
           headerStyle:{
                height:120,
                backgroundColor:'green'
            },
            headerTitleStyle:{
                color:'white',
                fontWeight:'bold'
            }
        }}/>
        <MainStack.Screen name="filmes" component={FilmesEmCartaz} options={{
            headerTitleAlign:'center'
        }}/>
    </MainStack.Navigator>
    );
};