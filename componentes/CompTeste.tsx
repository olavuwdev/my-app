import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Button} from "react-native";


const [name, setName] = useState('Teste')
const mostrarNome = () => {
    setName('Olavo');
}


 export const CompTest = () => {
    return(
    <View>
        <Text>{name}</Text>
        <Button
      title="Mudar nome para Adriel"
      onPress={mostrarNome}
      
      /> 
    </View>
    );
}