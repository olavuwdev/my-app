import { TouchableOpacity, Alert, View, Button, TextInput, TouchableHighlight, FlatList, Image, Text, SafeAreaView, StyleSheet, Pressable, DevSettings, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';
import { Person } from "./types/Person";
import  { WhatIsYourName} from './componentes/WhatIsYourName';
import  { HereIsYourName} from './componentes/HereIsYourName';
import  { MyBotton } from './componentes/ButtonCheck/';
import { Styles} from './assets/style/styles';
import { ScreenLogin} from './componentes/AppAula1/';
import { ControlBoll } from './componentes/ControlBoll/';
import { FilmesEmCartaz } from './componentes/FIlmesEmCartaz'; 
import React, { useState } from 'react';
import { ScreenLogin as Login} from './componentes/LoginScreen';


const Stack = createStackNavigator();

const App = () => {

    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={ScreenLogin} />
          <Stack.Screen name="Filmes" component={FilmesEmCartaz} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;


