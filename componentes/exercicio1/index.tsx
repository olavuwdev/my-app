import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";


export const Exer1 = () =>{
    const navigate = useNavigation()
    const [ingredients, setIngredients] = useState([])
    const [newItem, setNewItem] = useState('');
    
    navigate.setOptions({
        headerRight:() => <Button title="Adicionar" onPress={handleAddItem}/>
    })

    const handleAddItem = () =>{
        if(newItem.trim() != ''){
            setIngredients([...ingredients, {key: Date.now().toString(),name: newItem}]);
            //setIngredients([prevIngredientes => ({ ...prevIngredientes, name : newItem})])
            console.log(ingredients)
            setNewItem('')
        }
    }

    return(
        <View style={{paddingTop:20, alignItems:'center',backgroundColor:'#333', justifyContent:'center' }}>
        <Text style={{margin:8, fontSize:18, fontWeight:'bold', paddingTop:50, color:'red'}}>FAÇA UM BOLO</Text>
        <TextInput
        style={
            {           
                borderWidth:2,
                borderRadius:5,
                borderColor:'#000',
                fontSize:15,
                padding:10,
                color:'red'
                
            }
        }
        placeholder='Digite um ingrediente'
        onChangeText={t=> setNewItem(t)}
        placeholderTextColor="#FF0000"
        value={newItem}

        />
        <View style={{ justifyContent:'center'}}>
      <FlatList

        data={ingredients}
        renderItem={({ item }) => 
          <Text style={{textAlign:'center', padding:3, fontSize:25, color:'white'}}>{item.name}</Text>
        }

        />
        </View>
        </View>
    )
}