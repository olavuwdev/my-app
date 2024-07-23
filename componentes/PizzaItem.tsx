import { View, Text, StyleSheet, Pressable } from "react-native"


//JavaScrip

type Propos = {
    name: string;
    price:number;
    originalPrice?:number;
    items?: string[];

  }


export const PizzaItem = ({name, price, originalPrice, items}: Propos) =>{
    return (

        <View style={styles.container}>
            <Text style={[styles.name, styles.negrito]}>{name}</Text>
            <Text style={styles.price}>{`R$ ${price.toFixed(2)}`}</Text>
            {
                ( originalPrice && originalPrice > price) && <Text> PROMOÇÃO EXTRA!!</Text> 
            }
            <Text>{items?.join(', ')}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    price: {
        fontSize:15,
        fontWeight: 'bold'
    },
    name:{
        fontSize:17,
        color: '#0000FF'
    },
    container: {
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor:'#ccc'
        
    },
    negrito:{
        fontWeight: 'bold',
    }
});

