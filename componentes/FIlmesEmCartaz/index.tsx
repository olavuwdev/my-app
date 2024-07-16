import React, { useState } from 'react';
import {Button, Text, View, SafeAreaView } from 'react-native';
import { styles } from './style';


export const FilmesEmCartaz = () =>{

    const  [movies, setMovies] = useState([]);

    const handleLoadButton = async () =>{


        const req = await fetch("https://api.b7web.com.br/cinema/")
        const json = await req.json();

        if(json){
            setMovies(json);
        }

    }
    
    return(    
    <SafeAreaView style={styles.container}>
        <Button title="Carregar filmes" onPress={handleLoadButton} />
        <Text>FIlmes: {movies.length}</Text>
    </SafeAreaView>
);
} 