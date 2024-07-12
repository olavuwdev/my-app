import React, { useState } from 'react';
import { TouchableOpacity, Alert, View, Button, TextInput, TouchableHighlight, FlatList, Image, Text, SafeAreaView, StyleSheet, Pressable, DevSettings } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Person } from "./types/Person";
import  { WhatIsYourName} from './componentes/WhatIsYourName';
import  { HereIsYourName} from './componentes/HereIsYourName';
import { Styles} from './assets/style/styles'
 
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
            <Text style={Styles.title}>Meu primeiro App</Text>

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


