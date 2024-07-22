import React  from "react";


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
       
        flex:1
        ,backgroundColor:'#333'
    },
    textWelcome:{
        marginTop:10,
        textAlign:'center',
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    typeListMoviesButtonView:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        gap:8
    },
    typeListMoviesButton:{
        height:45,
        width:170,
        backgroundColor:'#1b7ccc',
        justifyContent:'center',
        borderRadius:10,
        alignItems:'center',
        flexDirection:'row'
    
    },
    loadingArea:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    loadingText:{
        color:'#FFF',

    },
    totalMoviesText:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        margin:10,
        
    },
    movieList:{
        flex:1,
        
    },
    movieItem:{
        alignItems:'center',
        marginBottom:1,
    },
    movieTitle:{
        fontSize:24,
        color:'#FFF',
        fontFamily: 'Roboto',
        textAlign:'center',
        marginTop:5,
        marginBottom:1
    },
    movieImage:{
        borderRadius:15,
        height:400,
        width:200
    }

})