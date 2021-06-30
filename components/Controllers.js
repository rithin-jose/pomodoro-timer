import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Controller(){
    return(
        <View style={styles.controller}>
            <View style={styles.controllerWrapper}>
                <View style={styles.stop}>
                    <Text style={styles.temptext}>Stop</Text>
                </View>
                <View style={styles.pause}>
                    <Text style={styles.temptext}>Start</Text>
                </View>
                <View style={styles.skip}>
                    <Text style={styles.temptext}>skip</Text>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    controller:{
        flex:1,
    },
    controllerWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    temptext:{
        color:'#fff'
    },
    
    skip:{
        height:windowWidth/5,          
        width:windowWidth/5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f00',
        borderRadius:50,          
    },
    stop:{
        height:windowWidth/5,          
        width:windowWidth/5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f00',
        borderRadius:50,
    },
    pause:{
        height:windowWidth/5,          
        width:windowWidth/5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f00',
        borderRadius:50,
    },
  });