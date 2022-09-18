import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Placar from './Placar'
import Dupla from './Dupla'
import Botoes from './Btn'
import FinalPartida from './FinalPartida'
import ListResultado from './ListResultado'
import BtnEmpate from './BtnEmpate'
import Inicio from './Inicio'

import {PointsContext} from '../contexts/context'


export default (props) => {

  const { duplas, 
          modalInicio, 
          partida,
          modalVisible,
          vencedor,
          pontosD1,
          pontosD2,
          contagemD1,
          contagemD2,
          partidasD1,
          partidasD2,
        } = useContext(PointsContext)

  return(
    <View style={styles.container}>
      <Inicio inicioVisible={modalInicio} />
      <FinalPartida isVisible= {modalVisible} 
        vencedor= {vencedor}
      />
      <Dupla />
      <View style={styles.placar}> 
        <Botoes ponto={1} d='d1' />
        <Placar pontos={pontosD1} d='d1' />
        <Placar pontos={pontosD2} d='d2' />
        <Botoes ponto={1} d='d2' />
      </View>
      <View style={styles.botoes}>
        <Botoes laterais ponto={2} d='d1' />
        <Botoes meio ponto={4} d='d1' />
        <BtnEmpate />
        <Botoes meio ponto={4} d='d2'  />
        <Botoes laterais ponto={2} d='d2'  />
      </ View>
      <View  style={styles.somas}> 
        <Text style={styles.dupla}>{duplas[0]} / {duplas[2]}</Text>
        <Text style={styles.contagem}>    {contagemD1}</Text>
        <Text style={styles.dupla}>{duplas[1]} / {duplas[3]}</Text>
        <Text style={styles.contagem}>    {contagemD2}</Text>
      </View>
      <View style={styles.lista}> 
        <Text style={styles.resultados}>Resultados</Text>
        <FlatList 
          data={partida}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <ListResultado {...item} />}
        />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202020", 
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    flex: 1
  },
  placar:{
    flexDirection: "row"
  },
  botoes:{
    flexDirection: "row",
  },
  contagem: {
    color: '#FFEE32',
  },
  somas: {
    width: 370,
    justifyContent: 'center',
    paddingTop: 16,
  },
  dupla: {
    fontWeight: 'bold',
    color: '#D6D6D6',
  },
  lista: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#333533',
    width: '97%',
    marginTop: 10,
    flex: 1,
    borderRadius: 10
  },
  resultados:{
    textAlign: 'center',
    color: '#FFD100',
    fontSize: 20
  },
});