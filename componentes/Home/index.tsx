import React, { useEffect, useState } from 'react';
import { Button, Text, View, Image, SafeAreaView, FlatList, ActivityIndicator, Vibration, TouchableOpacity } from 'react-native';
import { styles as S } from './style';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';




export default function HomeScreen() {

    const navigation = useNavigation()

    const pluss = () => {
        console.log("Clicou no pluss")
        navigation.navigate('addPlus')
    }

    return (
        <SafeAreaView style={{}}>
            <View style={S.container_product}>
                <View style={S.container_product_area}>
                    <Text style={S.container_product_text}>Qtd Produtos</Text>
                    <Text style={S.container_product_number}>5</Text>
                </View>
                <View style={S.container_product_area}>
                    <Text style={S.container_product_text}>Saidas do Mês</Text>
                    <Text style={S.container_product_number}>0</Text>
                </View>
                <View style={S.container_product_area}>
                    <Text style={S.container_product_text}>Entradas do Mês</Text>
                    <Text style={S.container_product_number}>0</Text>
                </View>

            </View>
            <View style={S.container_home}>
                <TouchableOpacity style={[S.container_item, { backgroundColor: '#10ee74' }]}
                    onPress={pluss}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[S.container_item, { backgroundColor: '#ee1010' }]}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={S.container_item}>
                    <AntDesign name="menufold" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
} 