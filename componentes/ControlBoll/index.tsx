import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style'
import {Ball} from './Ball/index'

let timer: number;

export const ControlBoll =() =>{

  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setposY] = useState(0);

  useEffect(() =>{
    const applyGravity = () =>{

      //Decreasing UpForce
      let newUpForce = upForce - gravity
      newUpForce = newUpForce < 0 ? 0 : newUpForce
      setUpForce(newUpForce)

      // Modifying speed
      let newSpeed = speed + (gravity - (newUpForce/2)); 
      setSpeed(newSpeed);

      //Setting new positon based on speed
      let newPosY = posY - newSpeed

      if(newPosY < 0){
        newPosY = 0
        setSpeed(0)
      }
      setposY(newPosY)

    }
    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);

  }, [gravity, upForce, speed, posY])

  const handleForceButton = () =>{
    setUpForce(7)
  }


  return(
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY}/>
      </View>
      <View style={styles.control}>
        <View >
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.controlButton} onPress={handleForceButton}> 
          <Text style={styles.ControlBollText} >🏀⬆️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}