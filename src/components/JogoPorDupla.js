import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
    
    return (
  <View style={styles.bloco}>
    <Text style={styles.texto}> {props.partidas}</Text>
  </View>
)}

const styles = StyleSheet.create({
  bloco: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: "#FFEE32", 
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#202020',
    fontFamily: 'arial', 
    fontSize: 14,
    fontWeight: 'bold',
  },
    
  
});