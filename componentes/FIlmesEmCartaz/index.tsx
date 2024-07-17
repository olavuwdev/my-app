import React, { useEffect, useState } from 'react';
import { Button, Text, View, Image, SafeAreaView, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { styles } from './style';



export const FilmesEmCartaz = () =>{

    const statusBarHeight = Constants.statusBarHeight;
    const [loading, setLoading] = useState(true);
    const  [movies, setMovies] = useState([]);
    const [typeListMovies, setTypeListMovies ] = useState('popular');

    useEffect(()=>{
        const requestMovies = async () => {
            setLoading(true)
            const req = await fetch(`https://api.themoviedb.org/3/movie/${typeListMovies}?language=pt-BR&api_key=e4c777a91f99e5aa2cbd14b2aedfad4c`)
            const json = await req.json();
            
            if(json){
                setMovies(json.results)
            }
            setLoading(false)
        }
        requestMovies();
    }, [typeListMovies])

  
    
    return(   
        <SafeAreaView style={[styles.container, {marginTop: statusBarHeight + 8}]}>
            <View style={styles.typeListMoviesButtonView} >
            <TouchableOpacity style={styles.typeListMoviesButton} onPress={() => setTypeListMovies('top_rated')}>
                <Text>Melhor avaliado </Text>
            
            </TouchableOpacity> 
            <TouchableOpacity style={styles.typeListMoviesButton} onPress={() => setTypeListMovies('popular')}>
                <Text>Populares</Text>
            
            </TouchableOpacity> 
            </View>
           
        { loading &&
            <View style={styles.loadingArea}>
                <ActivityIndicator size="large" color='#FFF'/>
                <Text style={styles.loadingText}>Carregando</Text>
            </View>
        }
        { !loading &&
        <>
            <Text style={styles.totalMoviesText}>FIlmes: {movies.length}</Text>
            <FlatList style={styles.movieList} data={movies} renderItem={({item})=>(
                <View style={styles.movieItem}>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <Image resizeMode="contain" source={{uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path}} style={styles.movieImage}/>
                </View>
            )}
        keyExtractor={item =>  item.id.toString()}
        />
        </>
    }
    </SafeAreaView>
);
} 