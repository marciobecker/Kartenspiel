import React, { useContext } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import {PointsContext} from '../contexts/context'

export default props => {

  const { duplas, salvaPartida, reverte } = useContext(PointsContext)
  const dupla = props.vencedor

  function save() {
    salvaPartida(dupla)
  }

  function cancel() {
    reverte(dupla)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible} >
      <View style={styles.back}></View>
      <View style={styles.container}>
        { props.vencedor === 'd1' 
          ? <Text style={styles.msg}> 
              {duplas[0]}/{duplas[2]} venceram a partida!!!
            </Text>
          : <Text style={styles.msg}>
              {duplas[1]}/{duplas[3]} venceram a partida!!!
             </Text>
        }
        <View style={styles.botoes}>
          <TouchableOpacity
            onPress={save}>
            <View style={styles.botao}>
              <Text style={styles.textBotao}>Salvar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={cancel}>
            <View style={styles.botao}>
              <Text style={styles.textBotao}>Cancelar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.back}></View>
    </Modal>    
)}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333533',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  botoes: {
    flexDirection: 'row'
  },
  botao:{
    backgroundColor: '#FFEE32',
    borderColor: '#FFD100',
    borderWidth: 2,
    height: 40,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25
  },
  textBotao:{
    color: '#202020',
    fontSize: 20,
    fontWeight: 'bold',
  },
  msg:{
    color: '#D6D6D6',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})