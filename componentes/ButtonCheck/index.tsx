import React from "react"
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from './style'


export const MyBotton = () => {
    return (
        <TouchableOpacity onPress={() => console.log("Teste") } style={styles.fundo}>
            <Text style={styles.fundoTexto}> Clique aqui</Text>
        </TouchableOpacity>
    );
}