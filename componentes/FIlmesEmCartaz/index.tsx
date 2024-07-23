import React, { useEffect, useState } from 'react';
import { Button, Text, View, Image, SafeAreaView, FlatList, ActivityIndicator,  Vibration ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { styles as S } from './style';
import { useRoute } from '@react-navigation/native';
import { Grid, Plane } from 'react-native-animated-spinkit'
import { useNavigation } from '@react-navigation/native';



export function FilmesEmCartaz ({}){

    //Constante de navegation
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const  [movies, setMovies] = useState([]);
    const [typeListMovies, setTypeListMovies ] = useState('popular');
    const [colorTemplate, setColorTemplate] = useState('#333');
    //Rota para pegar nome informado no ScreenLogin
    const route = useRoute()

    const name = route.params?.name ?? 'Visitante'
  
        navigation.setOptions({
            headerStyle:{
                backgroundColor: colorTemplate,
            }
        })
 


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
        <SafeAreaView style={[S.container, {backgroundColor:colorTemplate}]}>
            <Text  style={[S.textWelcome, ]}>Olá, {name}, é um prazer te ver aqui</Text>
            <View style={S.typeListMoviesButtonView} >
            <TouchableOpacity style={S.typeListMoviesButton} onPress={() => [setTypeListMovies('top_rated'),  Vibration.vibrate(60), setColorTemplate('green')]}>
                <Text>Melhor avaliado </Text>
            
            </TouchableOpacity>

            <TouchableOpacity style={S.typeListMoviesButton} onPress={() => [setTypeListMovies('popular'), Vibration.vibrate(60), setColorTemplate('orange')]}>
                <Text>Populares</Text>
            </TouchableOpacity> 
            </View>
           
        { loading &&
            <View style={S.loadingArea}>
                 <Grid size={48} color="#FFF" />
                <Text style={S.loadingText}>Carregando</Text>
            </View>
        }
        { !loading &&
        <>
           
            <Text style={[S.totalMoviesText, ]}>Filmes: {movies.length}</Text>
            <Text style={[S.totalMoviesText, {fontWeight:'bold',  fontSize:25, marginTop:2}]}>
  {typeListMovies === 'top_rated' ? 'Melhores avaliados' : 'Populares'}
</Text>
            <FlatList style={S.movieList} data={movies} renderItem={({item})=>(
                <View style={S.movieItem}>
                    <Text style={S.movieTitle}>{item.title}</Text>
                    <Image resizeMode="contain" source={{uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path}} style={S.movieImage}/>
                </View>
            )}
        keyExtractor={item =>  item.id.toString()}
        />
        </>
    }
    </SafeAreaView>
);
} 