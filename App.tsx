import React, { useState } from 'react';
import { TouchableOpacity, Alert, View, Button, TextInput, TouchableHighlight, FlatList, Image, Text, SafeAreaView, StyleSheet, Pressable, DevSettings } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Person } from "./types/Person";
import  { WhatIsYourName} from './componentes/WhatIsYourName';
import  { HereIsYourName} from './componentes/HereIsYourName';
 
const App = () => {
    // Tamanho da Barra de acordo com o sistema OP
    const statusBarHeight = Constants.statusBarHeight;


    const [nome, setName] = useState('Pablo')

    const enviaNome = (newName:string) => {
      setName(newName);
    }
    const handleClear = () =>{
        setName('')
    }

    return (
        <SafeAreaView style={{ marginTop: statusBarHeight + 8 }}>
            <Text style={styles.title}>Meu primeiro App</Text>

            <View style={{ alignItems: 'center' }}>
            

                <View>
                  { nome == '' &&
                    <>
                        <WhatIsYourName onSend={enviaNome} />
                    </>
              }
              {
                nome != '' &&
                <>
                        <HereIsYourName name={nome} clearFunction={handleClear} />
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
