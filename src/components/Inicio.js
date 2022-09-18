import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import Heads from './Heads'

import {PointsContext} from '../contexts/context'


export default props => {

  const { incluiNomes } = useContext(PointsContext)

  const [nome1D1, setNome1D1] = useState('')
  const [nome2D1, setNome2D1] = useState('')
  const [nome1D2, setNome1D2] = useState('')
  const [nome2D2, setNome2D2] = useState('')

  function iniciar() {
    incluiNomes(nome1D1, nome2D1, nome1D2, nome2D2)
  }
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.inicioVisible} >
      <View style={styles.container}>
        <Heads />
        <View style={styles.bloco}>
          <Text style={styles.text}> Vamos formar as Duplas </Text>
          <TextInput 
            style={styles.input}
            onChangeText={nome1D1 => setNome1D1(nome1D1)}
            value={nome1D1}
          />
          <TextInput 
            style={styles.input}
            onChangeText={nome2D1 => setNome2D1(nome2D1)}
            value={nome2D1}
          />
          <Text style={styles.text}> VS </Text>
          <TextInput 
            style={styles.input}
            onChangeText={nome1D2 => setNome1D2(nome1D2)}
            value={nome1D2}
          />
          <TextInput 
            style={styles.input}
            onChangeText={nome2D2 => setNome2D2(nome2D2)}
            value={nome2D2}
          />
          <TouchableOpacity
            onPress={ iniciar }>
            <View style={styles.botao}>
              <Text style={styles.textBotao}>Jogar</Text>
            </View>
          </TouchableOpacity>
        </View> 
      </View>
    </Modal>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202020',
    },
    text:{
      marginTop: 30,
      fontSize: 24,
      color: '#D6D6D6',
      fontWeight: 'bold'
    },
    bloco:{
      alignItems: 'center'
    },
    input:{
      backgroundColor: '#202020',
      marginTop: 30,
      height: 40,
      width: 220,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#FFD100',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20 ,
      color: '#D6D6D6'     
    },
      botao:{
      marginTop: 30,  
      backgroundColor: '#FFEE32',
      borderColor: '#FFD100',
      borderWidth: 3,
      height: 50,
      width: 180,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    textBotao:{
      fontSize: 20,
      color: '#333533',
      fontWeight: 'bold'
    }
  })