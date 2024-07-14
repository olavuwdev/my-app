import {Text, ScrollView, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import {styles} from './style'
import React, {useState} from 'react';



export const ScreenLogin = () =>{

    const [emailField, setEmailField] = useState<string>('');
    const [passwordField, setpasswordField] = useState<string>('');

    function checkToNavigate(){
        if((emailField, passwordField) != ''){
            return handleLoginButton
        }
    } 
    const handlePress = () => {
        const navigate = checkToNavigate();
        if (navigate) {
          navigate(); // Chama a função handleLoginButton se a condição for atendida
        } else {
          Alert.alert("Erro", "Por favor, preencha todos os campos.");
        }
      };

    const handleForgetButton = () =>{

    }
    const handleSignUpButton = () =>{

    }
    const handleLoginButton = () =>{
        alert(emailField)
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
                    <Text style={styles.inputLabel}> Email</Text>
                    <TextInput
                    style={styles.inputField}
                    placeholder='Digite seu email!'
                    placeholderTextColor="#999"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    
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

                <TouchableOpacity onPress={handlePress} style={styles.button}>
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