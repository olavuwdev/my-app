import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Ball } from './Ball/index';

let timer: number;
let forceTimer: number;

export const ControlBoll = () => {
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setposY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      // Diminuindo a Força para Cima
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      // Modificando a Velocidade
      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      // Definindo a Nova Posição com Base na Velocidade
      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }
      setposY(newPosY);
    };
    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  const handleForceButton = () => {
    setUpForce(6);
  };

  const startForce = () => {
    handleForceButton();
    forceTimer = setInterval(handleForceButton, 100);
  };

  const stopForce = () => {
    clearInterval(forceTimer);
  };

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPressIn={startForce}
          onPressOut={stopForce}
        >
          <Text style={styles.ControlBollText}>🏀⬆️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
