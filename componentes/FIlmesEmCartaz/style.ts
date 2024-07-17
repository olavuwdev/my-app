import React  from "react";


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1
        ,backgroundColor:'#333'
    },
    typeListMoviesButtonView:{
        flexDirection:'row',
        justifyContent:'center'
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
        marginBottom:25
        
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