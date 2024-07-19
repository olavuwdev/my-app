import React, { useState } from "react";
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native'
import Constants from 'expo-constants';
import {style as S} from './style'


export const ScreenLogin = () =>{

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
            setcupomShow(true)
        }else{
            setStatus('Acesso NEGADO');
            setcupomShow(false)
            setCupom('')
        }
}
    return(
        <SafeAreaView style={[S.content,  {marginTop: Constants.statusBarHeight + 8}]}>
            <Text style={S.header}>Tela de Login</Text>

            <TextInput 
            style={S.input}
             placeholder="Digite o seu email"
             onChangeText={(t)=>setEmail(t)}
            ></TextInput>

            <TextInput 
            style={S.input} 
            placeholder="Digite sua senha"
            value="password"
            onChangeText={(t)=>setpassword(t)}
            secureTextEntry={true}
            ></TextInput>

            <Button title="Verificar" onPress={handleVerifyLogin}/>

            <Text style={S.status}>{status}</Text>
            {cupomShow &&
                <View style={S.cupomArea}>
                <Text style={S.cupomTitle}>Cupom:</Text>
                <Text style={S.cupom}>{generateCupom()}</Text>
                </View>
            }
            
        </SafeAreaView>
    );
}