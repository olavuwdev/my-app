import { TouchableOpacity, Alert, View, Button, TouchableHighlight, Image, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { Person } from "./types/Person";
import Constants from 'expo-constants';
import { useState } from 'react';




const App = () => {
    //Tamanho da Barra de acordo com o sistema OP
    const statusBarHeight = Constants.statusBarHeight;

  //Criando Array com UseState

  const [ingredientes, setIngredients] = useState<string[]>([
    'ovo',
    'farinha',
    'açucar'
  ])

  const imagem = 'https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png'

  const hadleAddIngredients = () => {
    //setIngredients( [...ingredientes, 'Fermento']);
    setIngredients(prevIngredients => [...prevIngredients, 'Fermento'])
  }
  const cleanIngredients = () => {
    setIngredients( [''])
  }

  return (
    <SafeAreaView style={{ marginTop: statusBarHeight + 8 }}>
      <Text style={styles.title}>Meu primeiro App</Text>
      <View>
        {ingredientes.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
        ))}
      </View>

      <Button title="Adicionar item" onPress={hadleAddIngredients}/>
        <View style={{ alignItems: 'center' }}>
        <Image 
        source={require('./assets/marmita_10.png')}
        style={{width:50, height:50}}
         />
      <Button title="Limpar" onPress={cleanIngredients}/>
        </View>
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
    color: '#FFF',
    textAlign: 'center'
  },
  item:{
    fontSize: 15,
    color: '#000',
    textAlign: 'center'
  },
  button:{
    backgroundColor: 'gray',
    margin:10
    
  },
  buttonText:{
    textAlign: 'center',
    fontSize:19,
    color: 'green'
  },
  box:{
    borderColor: '#000000',
    borderStyle: 'dotted',
    borderWidth: 1.5,
    margin:10,
    padding:10
  }
});
