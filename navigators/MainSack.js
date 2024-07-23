import { createStackNavigator, screenOption } from '@react-navigation/stack';
import React from 'react';
import { ScreenLogin } from '../componentes/AppAula1';
import { style } from './../componentes/LoginScreen/style';
import { FilmesEmCartaz } from '../componentes/FIlmesEmCartaz';
import { Exer1 } from '../componentes/exercicio1';

const MainStack = createStackNavigator();

export const ScreenMain = () => {
    
    return(
    <MainStack.Navigator screenOptions={{
        headerTitleAlign:'center',
        }
    }>
        <MainStack.Screen  name="Login" component={ScreenLogin} options={{
           headerStyle:{
                height:80,
                backgroundColor:'green'
            },
            headerTitleStyle:{
                color:'white',
                fontWeight:'bold'
            },
            headerBackTitleStyle:{
                color:'red'
            }
        }}/>
        <MainStack.Screen name="FILMES" component={FilmesEmCartaz} options={({route})=>
            {
            const backgroundColor = typeof route.params?.color === 'string' ? route.params.color : '#FF0000';
            return{
                headerStyle:{
                    backgroundColor: 'green',
                },
                headerBackTitleStyle:{
                    color:'#FF0000'
                }
            }
            }}/>
        <MainStack.Screen name="Exercicio1" component={Exer1} options={({route})=>
            {
            return{
                headerStyle:{
                    backgroundColor: 'green',
                },
                headerBackTitleStyle:{
                    color:'#FF0000'
                }
            }
            }}/>
            
    </MainStack.Navigator>
    );
};