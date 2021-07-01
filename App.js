import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from './components/ProgressBar';
import Timer from './components/Timer'
import Controller from './components/Controllers'
import Session from './components/Session'
import Quotes from './components/Quotes'

export default function App() {
  
  const [minutes,setMinutes] = useState(25);
  const [seconds,setSeconds] = useState('00');
  const [timer,runTimer] = useState(false);

  return (
    <View style={styles.container}>

      <ProgressBar progress={minutes}/>

      <Timer minute={minutes} second={seconds}/>

      <Controller timer={timer}/>

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
