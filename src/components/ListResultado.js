import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
  
  return(
    <View style={styles.container}>
      <Text style={styles.nomes}>{props.dupla1} </Text>
      <Text style={styles.pontos}>{props.pontosD1} </Text>
      <Text style={styles.nomes}>{props.dupla2} </Text>
      <Text style={styles.pontos}>{props.pontosD2} </Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    width: 320,
    backgroundColor: '#d4af37',
    height: 85,
    borderRadius: 20,
    borderEndWidth: 3,
    borderEndColor: '#D6D6D6',
    borderBottomWidth: 3,
    borderBottomColor: '#D6D6D6',
    marginBottom: 5
  },
  nomes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#202020',
    marginLeft: 15    
  },
  pontos:{
    fontSize: 14,
    color: '#333533',
    marginLeft: 25    
  }
})