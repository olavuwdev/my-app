import { View, Text } from 'react-native';
import {styles} from './style'
import { useEffect, useState } from 'react';

type Props ={
  posY:number
}


export const Ball = ({posY}: Props) =>{
  return(
    <View style={[styles.container,  {bottom: posY}]}>
      <Text style={{fontSize:26, textAlign:'center'}}>🏀</Text>
    </View>
  )
}
