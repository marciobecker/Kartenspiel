import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PointsContext } from '../contexts/context';

export default props => {

  const { empatou } = useContext(PointsContext)

  return (
    <TouchableOpacity 
      onPress={empatou}>
      <View style={styles.container}>
        <Text style={styles.texto}>E</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    marginTop: 10,
    borderColor: '#aba28a',
    borderWidth: 3,
    backgroundColor: '#d9a802',
    borderRadius: 15,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  texto: {
    color: '#333533',
    fontFamily: 'arial', 
    fontWeight: 'bold',
    fontSize: 18,
  },
})