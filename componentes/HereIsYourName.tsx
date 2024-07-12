import React, { useState } from 'react';
import { Text, TextInput, Button, View } from "react-native";

type Propos = {
    name: string,
    clearFunction: () => void
}




export const HereIsYourName = ({name, clearFunction }:Propos) => {

    
    return ( 
        <View> 
        <Text> Seja bem vindo, {name}</Text>
        <Button title={`Não sou o ${name}` } onPress={clearFunction}/>
        </View>
    )
    }