import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Heads from './components/Heads'
import Pontos from './components/Pontos'
import PointsProvider from './contexts/context';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PointsProvider>
          <Heads />
          <Pontos /> 
        </PointsProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    padding: 5,
  },
});
