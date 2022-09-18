import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {PointsContext} from '../contexts/context'

export default props => {

  const { reverte } = useContext(PointsContext)

  function volta() {
    const d = props.d
    reverte(d)
  }
  
  return (
    <TouchableOpacity 
      onLongPress={volta} >
      <View style={styles.container}>
        <Text style={styles.texto}>
          {props.pontos}
        </Text>
      </View>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 110,
    backgroundColor: "#333533", 
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#D6D6D6',
    fontFamily: 'arial', 
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 15,
  }
});