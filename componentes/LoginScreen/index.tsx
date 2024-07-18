import React, { useState } from "react";
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native'
import Constants from 'expo-constants';
import {style as S} from './style'


export const ScreenLogin = () =>{

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cupom, setCupom] = useState('')
    const [cupomShow, setcupomShow] = useState(false)
    const [status, setStatus] = useState('')

    const handleVerifyLogin = () =>{
        
    }
    return(
        <SafeAreaView style={[S.content,  {marginTop: Constants.statusBarHeight + 8}]}>
            <Text style={S.header}>Tela de Login</Text>

            <TextInput 
            style={S.input}
             placeholder="Digite o seu email"
             value="email"
             onChangeText={(t)=>setEmail(t)}
            ></TextInput>

            <TextInput 
            style={S.input} 
            placeholder="Digite sua senha"
            value="password"
            onChangeText={(t)=>setSenha(t)}
            secureTextEntry={true}
            ></TextInput>

            <Button title="Verificar" onPress={handleVerifyLogin}/>

            <Text style={S.status}>{status}</Text>
            {cupomShow &&
                <View style={S.cupomArea}>
                <Text style={S.cupomTitle}>Cupom:</Text>
                <Text style={S.cupom}>RS554D123</Text>
                </View>
            }
            
        </SafeAreaView>
    );
}