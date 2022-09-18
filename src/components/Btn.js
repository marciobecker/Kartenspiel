import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {PointsContext} from '../contexts/context'

export default props => {

  const { soma } = useContext(PointsContext)

  function press () {
    const n = props.ponto
    const d = props.d
    soma(n, d)
  }

  const bloco2 = [styles.container]
  if (props.meio) {bloco2.push(styles.meios) }
  if (props.laterais) {bloco2.push(styles.laterais) }

  return (
    <TouchableOpacity 
      onPress={press}>
      <View style={bloco2}>
        <Text style={styles.texto}>+{props.ponto} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    marginTop: 10,
    borderColor: '#FFD100',
    borderWidth: 3,
    backgroundColor: '#202020',
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  texto: {
    color: '#D6D6D6',
    fontFamily: 'arial', 
    fontWeight: 'bold',
    fontSize: 18,
  },
  meios:{
    marginHorizontal: 23,
  },
  laterais:{
    marginHorizontal: 10,
    bottom: 5,
  },
})