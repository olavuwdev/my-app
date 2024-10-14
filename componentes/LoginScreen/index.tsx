import React, { useState } from "react";
import {SafeAreaView, View, Text, TextInput, Button, Vibration} from 'react-native'
import Constants from 'expo-constants';
import {style as S} from './style'

import { useNavigation } from '@react-navigation/native';




export const ScreenLogin = () =>{

    const navigation = useNavigation()

    //Função para gerar um cupom aleatorio
    const generateCupom = () => {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const lenght = 7;
        let cupom = '';

        for (let i = 0; i < lenght; i++){
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            cupom += caracteres[randomIndex]
        }
        return cupom;
    };

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cupom, setCupom] = useState('')
    const [cupomShow, setcupomShow] = useState(true)
    const [status, setStatus] = useState('')

    const handleVerifyLogin = async () =>{
        //console.log('teste')

        const response = await fetch('https://api.b7web.com.br/loginsimples/', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json(); 

        if(json.status == 'ok'){
            setStatus('Acesso LIBERADO');
            setCupom(generateCupom())
            setcupomShow(true)
            navigation.navigate('HomeScreen'); // Navega para a tela Filmes
        }else{
            setStatus('Acesso NEGADO');
            setcupomShow(false)
            setCupom('')
        }
}
    return(
        <SafeAreaView style={[S.content]}>
            <Text style={S.header}>Tela de Login</Text>

            <TextInput 
            style={S.input}
             placeholder="Digite o seu email"
             onChangeText={(t)=>setEmail(t)}
            ></TextInput>

            <TextInput 
            style={S.input} 
            placeholder="Digite sua senha"
            onChangeText={(t)=>setpassword(t)}
            secureTextEntry={true}
            ></TextInput>

<Button title="Verificar" onPress={() => { handleVerifyLogin(); Vibration.vibrate(80); }} />


            <Text style={S.status}>{status}</Text>gi
            {cupomShow &&
                <View style={S.cupomArea}>
                <Text style={S.cupomTitle}>Cupom:</Text>
                <Text style={S.cupom}>{cupom}</Text>
                </View>
            }
            
        </SafeAreaView>
    );
}