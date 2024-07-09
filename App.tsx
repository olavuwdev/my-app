import { TouchableOpacity, Alert, View, Button, TouchableHighlight, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { PizzaItem } from './componentes/PizzaItem';
import { useState } from 'react';

const handleButton = () => {
  Alert.alert("Você apertou!")
}

//Formas de Pressionamento

const handlePressIn = () => {
  Alert.alert('Apertou')
};
const handlePressOut = () => {
  Alert.alert("Soltou o dedo!")
}

const handleLongPress = () => {
  Alert.alert('Segurou o dedo')
}


const App = () => {
  const [name, setName] = useState('Ninguem');
  
  const alterarNome = () => {
    setName('Olavo')
  }  
  const alterarNome2 = () => {
    setName('Adriel')
  }
  return (
    <SafeAreaView style={{ paddingTop: 27  }}>
      <Text style={styles.title}>Pizzaria 10</Text>
      <Text style={styles.subtitles}>Lista de pizzas 10</Text>

      <Text style={{textAlign: 'center', margin:10, fontWeight: 'bold', fontSize:28}}> Meu nome é: {name}</Text>

      <Button
      title="Mudar nome para Olavo"
      onPress={alterarNome}
      />
      
      <Button
      title="Mudar nome para Adriel"
      onPress={alterarNome2}
      
      /> 

    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'red'
  },
  subtitles: {
    fontSize: 17,
    color: '#CCC',
    textAlign: 'center'
  },
  button:{
    backgroundColor: 'gray',
    margin:10
    
  },
  buttonText:{
    textAlign: 'center',
    fontSize:19
  }
});
