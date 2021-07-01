import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Session(){

    return(
        <View style={styles.session}>

            <Text style={styles.details}>Session: count</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({

    session:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    details:{
        color:'#fff',
        fontSize:windowWidth/20,
        fontWeight:'700',
    }
});