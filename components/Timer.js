import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Timer(){
    return(
        <View style={styles.timer}>
            <Text style={styles.count}>00:00</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    timer:{
        flex:1,
        alignItems:'center',
      },

    count:{
        fontSize:windowWidth/8,
        color:'#fff'
    }

  });