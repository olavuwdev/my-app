import React, { useState } from 'react';
import { TouchableOpacity, Alert, View, Button, TextInput, TouchableHighlight, FlatList, Image, Text, SafeAreaView, StyleSheet, Pressable, DevSettings } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Person } from "./types/Person";

const App = () => {
    // Tamanho da Barra de acordo com o sistema OP
    const statusBarHeight = Constants.statusBarHeight;

    // Criando Array com UseState
    const [ingredientes, setIngredients] = useState<string[]>([
        'ovo',
        'farinha',
        'açucar'
    ]);

    const imagem = 'https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png';

    const [nameField, setNameField] = useState<string>('');

    const handleAddIngredients = () => {
        if (nameField.trim().length > 0) {
            setIngredients(prevIngredients => [...prevIngredients, nameField]);
            setNameField(''); // Limpar o campo de entrada após adicionar
        } else {
            alert('Coloque algo no campo de item');
        }
    }

    const cleanIngredients = () => {
        setIngredients([]);
    }
    const [nome, setName] = useState('')

    const enviaNome = () => {
      setName(nameField);
    }

    return (
        <SafeAreaView style={{ marginTop: statusBarHeight + 8 }}>
            <Text style={styles.title}>Meu primeiro App</Text>
            <View>
                <Text style={styles.title}>Minha lista</Text>
                {ingredientes.map((item, index) => (
                    <Text key={index} style={styles.item}>{item}</Text>
                ))}
            </View>
            <View>
                <TextInput
                    style={{ textAlign: 'center', backgroundColor: '#b6beb6', padding: 10, margin: 5 }}
                    placeholder='Nome do item'
                    placeholderTextColor='#55149e'
                    cursorColor={'black'}
                    
                    onChangeText={text => setNameField(text)}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <Button title="Adicionar item" onPress={handleAddIngredients} />
                <Image
                    source={require('./assets/marmita_10.png')}
                    style={{ width: 50, height: 50 }}
                />
                <Button title="Limpar" onPress={cleanIngredients} />

                <Text> Qual o seu nome?</Text>
                <View>
                  { nome == '' &&
                  <>
                <TextInput
                    style={{ textAlign: 'center', backgroundColor: '#b6beb6', padding: 10, margin: 5 }}
                    placeholder='Nome'
                    placeholderTextColor='#55149e'
                    cursorColor={'black'}
                    value={nameField}
                    onChangeText={text => setNameField(text)}
                />
                </>
              }
              <Button title='Ok' onPress={enviaNome}/>
              {
                nome != '' &&
                <>
                  <Text> Seja bem vindo, {nameField}</Text>
                <Button title='Retornar' onPress={() => setName('')}/>
                </>
              }
              
            </View>
            </View>
        </SafeAreaView>
    );
}

export default App;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#775252'
    },
    subtitles: {
        fontSize: 17,
        color: '#FFF',
        textAlign: 'center'
    },
    item: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'gray',
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 19,
        color: 'green'
    },
    box: {
        borderColor: '#000000',
        borderStyle: 'dotted',
        borderWidth: 1.5,
        margin: 10,
        padding: 10
    }
});
