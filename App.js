import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from './components/ProgressBar';
import Timer from './components/Timer'
import Controller from './components/Controllers'
import Session from './components/Session'
import Quotes from './components/Quotes'

export default function App() {
  
  return (
    <View style={styles.container}>
      <ProgressBar/>
      <Timer/>
      <Controller/>
      <Session/>
      <Quotes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },  
});
