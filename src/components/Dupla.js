import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JogoPorDupla from './JogoPorDupla'
import { PointsContext } from '../contexts/context';


export default props => {

  const { duplas, partidasD1, partidasD2, num } = useContext(PointsContext)

  const cor = (num === 0 ) ? [styles.texto1, styles.opcao1Cor] 
                           : [styles.texto1, styles.opcao2Cor]
  const cor1 = (num === 1 ) ? [styles.texto1, styles.opcao1Cor] 
                            : [styles.texto1, styles.opcao2Cor]
  const cor2 = (num === 2 ) ? [styles.texto, styles.opcao1Cor] 
                            : [styles.texto, styles.opcao2Cor]
  const cor3 = (num === 3 ) ? [styles.texto, styles.opcao1Cor] 
                            : [styles.texto, styles.opcao2Cor]
  
    
  return (
    <View style={styles.duplas}>
      <View style={[styles.container, styles.ajEsq]}>
        <View style={styles.primLinha}> 
        <JogoPorDupla partidas={partidasD1} />
        <Text style={cor}>{duplas[0]}</Text>
        </View>
        <Text style={cor2}> {duplas[2]} </Text>
      </View>
      <View style={[styles.container, styles.ajDir]}>
        <View style={styles.primLinha}> 
        <JogoPorDupla partidas={partidasD2} />
        <Text style={cor1}>{duplas[1]}</Text>
        </View>
        <Text style={cor3}> {duplas[3]} </Text>
      </View>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 160,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: "#333533", 
    marginTop: 10,
    marginHorizontal: 10,
  },
  texto1: { 
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginStart: 10,
  },
   texto: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ajEsq: {
    borderBottomLeftRadius: 10,
  },
  ajDir: {
    borderBottomRightRadius: 10,
  },
  primLinha:{
    flexDirection: 'row'
  },
  duplas: {
    flexDirection: "row"
  },
  opcao1Cor: {
    color: '#D6D6D6'
  },
  opcao2Cor: {
    color: '#FFEE32'
  },
});