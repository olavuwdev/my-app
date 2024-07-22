import {Text, ScrollView, View, Image, TextInput, TouchableOpacity, Alert, Vibration} from 'react-native'
import {styles} from './style'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';



export const ScreenLogin = () =>{

    const [name, setname] = useState<string>('');
    const [passwordField, setpasswordField] = useState<string>('');
    //Constante com classe para o uso da navegação
    const navegation = useNavigation();

    function checkToNavigate(){
        if(name !== '' && passwordField !== ''){
            return handleLoginButton
        }
    } 
    const handlePress = () => {
        const navigate = checkToNavigate();
        if (navigate) {
            navegation.push('filmes', {name})
        } else {
          Alert.alert("Erro", "Por favor, preencha todos os campos.");
        }
      };

    const handleForgetButton = () =>{

    }
    const handleSignUpButton = () =>{

    }
    const handleLoginButton = () =>{
        alert(name)
        alert(passwordField)
    }

    return(
       <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
                <Image source={require('../../assets/img/screenLogin/Logo.png')} style={styles.logo}/>
                <Text style={styles.h1}> Clean Hands</Text>
                <Text style={styles.h2}> Seja bem vindo(a)! </Text>
                <Text style={styles.h2}> Digite seus dados abaixo</Text>
            
                <View style={styles.areaTextInput}>
                    <Text style={styles.inputLabel}> Usuario</Text>
                    <TextInput
                    style={styles.inputField}
                    placeholder='Digite seu usuario!'
                    placeholderTextColor="#999"
                    value={name}
                    onChangeText={t => setname(t)}
                    autoCapitalize='none'
                    
                    
                    />

                </View>
                <View style={styles.areaTextInput}>
                    <Text style={styles.inputLabel}> Senha</Text>
                    <TextInput
                    style={styles.inputField}
                    placeholder='*******'
                    secureTextEntry
                    value={passwordField}
                    onChangeText={t=> setpasswordField(t)}
                    placeholderTextColor="#999"

                    />

                </View>

                <View style={styles.aditionals}>
                    <TouchableOpacity onPress={handleForgetButton} style={styles.forgotBtnArea}>
                        <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() =>[handlePress(),  Vibration.vibrate(50)]} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.signUpArea}>
                    <Text style={styles.signUpText}>Não tem cadastro?</Text>
                    <TouchableOpacity onPress={handleSignUpButton}>
                        <Text style={styles.signUpBtnText}>Cadastra-se</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerArea}>
                    <Text style={styles.footerText}>Criado Por Olavo Adriel</Text>
                </View>
                
            </View>
       </ScrollView>
    );
}