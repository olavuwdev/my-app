import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from "react-native";
import {Styles} from '../assets/style/styles'

type Propos = {
    name: string,
    clearFunction: () => void
}




export const HereIsYourName = ({name, clearFunction }:Propos) => {

    
    return ( 
        <View> 
        <Text style={Styles.buttonText}> Seja bem vindo, {name}</Text>
        <View style={Styles.box}>
        <Button title={`Não sou o ${name}` } onPress={clearFunction} style={Styles.button} />
        </View>
        </View>
    )
    }