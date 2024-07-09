import { TouchableOpacity, Alert, View, Button, TouchableHighlight, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { PizzaItem } from './componentes/PizzaItem';

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
  return (
    <SafeAreaView style={{ paddingTop: 27  }}>
      <Text style={styles.title}>Pizzaria 10</Text>
      <Text style={styles.subtitles}>Lista de pizzas 10</Text>

      {/*
       <Button 
      title="botao"
      onPress={handleButton} /> 
   
        Componente Pressable - Mesma funcionade do botão
      <Pressable onPress={handleButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Aperte aqui</Text>
        </View>
      </Pressable>
   */}

      <PizzaItem
        name='Calabresa'
        price={45}
        items={['Massa', 'Calabresa', 'Queijo', 'Milho']}
        onPress={() => Alert.alert('Calabresa')}
      />

      <PizzaItem
        name='Frango'
        price={40}
        items={['Massa', 'Frango', 'Queijo', 'Milho']}
        onPress={() => Alert.alert('Pizza de frango')}
        />
        <PizzaItem
        name='Chocolate'
        price={35}
        items={['Massa', 'Chocolate', 'Leite']}
        originalPrice={80}
        onPress={() => Alert.alert('Pizza de chocolate')}
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
