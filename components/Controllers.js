import React from 'react';

import {
    Dimensions,
    TouchableHighlight,
    useEffect,
    useState,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

const windowWidth = Dimensions.get('window').width;

export default function Controller(props){
    
    return(
        <View style={styles.controller}>

            <View style={styles.controllerWrapper}>

                    <View style={styles.stop}>
                    
                        <Icon style={styles.temptext} size={40} name="stop"></Icon>

                    </View>

                
                <TouchableHighlight onPress={()=>{
                    props.onPress(!(props.timer))
                    // console.log();
                }}>
                    <View style={styles.pause}>
                    
                        <Icon style={styles.temptext} size={40} name="play-arrow"></Icon>
                    
                    </View>
                </TouchableHighlight>

                <View style={styles.skip}>

                    <Icon style={styles.temptext} size={40} name="skip-next"></Icon>

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
    },
    stop:{
        height:windowWidth/5,          
        width:windowWidth/5,
        alignItems:'center',
        justifyContent:'center',

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