import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ProgressBar(){
    return(
        <View style={styles.progress}>
            <AnimatedCircularProgress
                size={220}
                width={15}
                backgroundWidth={5}
                fill={80}
                tintColor="#00ff00"
                tintColorSecondary="#ff0000"
                backgroundColor="#3d5875"
                arcSweepAngle={220}
                rotation={-110}
                lineCap="round"
                />
      </View>
    )
}

const styles = StyleSheet.create({

    progress:{
      flex:3,
      alignItems:'center',
      justifyContent: 'flex-end'
    },

  });