import React, { useState } from 'react';
import { TouchableOpacity, Alert, View, Button, TextInput, TouchableHighlight, FlatList, Image, Text, SafeAreaView, StyleSheet, Pressable, DevSettings, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Person } from "./types/Person";
import  { WhatIsYourName} from './componentes/WhatIsYourName';
import  { HereIsYourName} from './componentes/HereIsYourName';
import  { MyBotton } from './componentes/ButtonCheck/';
import { Styles} from './assets/style/styles';
import { ScreenLogin} from './componentes/AppAula1/';
import { ControlBoll } from './componentes/ControlBoll/';
import { FilmesEmCartaz } from './componentes/FIlmesEmCartaz'; 
import { ScreenLogin as S} from './componentes/LoginScreen';
const App = () => {

    return(
       <S/>
    );
}

export default App;


