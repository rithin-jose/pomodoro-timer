import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Quotes(){

    return(
        <View style={styles.wrapper}>

            <Text style={styles.quote}>test</Text>
            
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',

    },
    quote:{
        color:'#fff',
        fontSize:windowWidth/20,
    }
});