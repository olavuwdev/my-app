import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    content:{
        backgroundColor:'#424242',
        flex:1,
        padding:20,
    },
    header:{
        fontWeight:'bold',
        fontSize:25,
        color:'white',
        marginBottom:10,
        textAlign:'center'
    },
    input:{
        height:45,
        fontSize:20,
        backgroundColor:'#555',
        color:'#fff',
        borderRadius:5,
        marginBottom:20,
        paddingLeft:10,
        paddingRight:10
    },
    status:{
        margin:50,
        color:'white',
        fontSize:18,
        textAlign:'center'
    },
    cupomArea:{
        backgroundColor:'white',
        padding:30,
        borderRadius:15
    },
    cupomTitle:{
        fontSize:20,
        textAlign:'center'
    },
    cupom:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:40
    }
    
})