import React, { useState } from 'react';
import { Text, TextInput, Button, View } from "react-native";

type Propos = {
    onSend : (newName:string) => void
}

export const WhatIsYourName = ({onSend }:Propos) => {
    const [nameField, setNameField] = useState<string>('');
    
    const handleClick = () =>{
        onSend(nameField)
    }
    return (   
  
    <View> 
        <Text> Qual o seu nome?</Text>
        <TextInput
            style={{ textAlign: 'center', backgroundColor: '#b6beb6', padding: 10, margin: 5 }}
            placeholder='Nome'
            placeholderTextColor='#55149e'
            cursorColor={'black'}
            onChangeText={name => setNameField(name)}
        />
        <Button title='Ok' onPress={handleClick}/>
    </View>
    )   
}