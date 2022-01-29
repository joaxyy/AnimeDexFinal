import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default function AOT (props){
    return (
        <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.titleText}> ATTACK ON TITAN</Text>
            <Text style={styles.text}> Producer: Tetsuya Kinoshita {"\n"} Writer: Yasuko Kobayashi {"\n"} Directed by: Tetsurō Araki, Masashi Koizuka </Text>
            
            

            <View style={styles.photoContainer}><Image style={styles.photo} source={require('./assets/AOT/aot_bg.jpg')}/></View>
            
                <Text style={styles.subtext}>{"\n"}</Text>
                <Text style={styles.subtext}>Synopsis</Text>
                <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisText}>{'\t'} The season follows Gabi Braun and Falco Grice, young Eldian Warrior candidates
                    seeking to inherit Reiner's Armored Titan four years after the failed mission to claim
                    the Founding Titan. Marley plans to invade Paradis to strengthen their weakening military
                    and recover the Founding Titan. With the Survey Corps on the Marley shoreline,
                    Gabi, Falco, Reiner, and other Titans go to war with the Paradis soldiers as Eren Jaeger
                    reveals his new plan of attack on the Marleyan invaders: annihilation. {"\n"}{"\n"}

                    {'\t'}As both sides take a heavy death toll, both the Marleyan Warriors and the Survey Corps
                    must question the best approach to claiming victory over the other side. Eren's comrades begin
                    to realize that he has begun to walk down a questionable path, while Gabi and Falco
                    must combat their internal tensions over the supposed "devils" of Paradis.  
                </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('AOTChar');  }}>
                <View style={styles.nextButton}>
                <Text style={styles.nextButtonText}>{">>"} SEE CHARACTERS PAGE</Text>
                </View>
                </TouchableOpacity>
           
       
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#0f0f0e',
    color: 'white',
  },

  photo: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',

},
photoContainer: {
    width: 365,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#42e4d7',
    borderRadius: 10,
    borderStyle: 'dashed',
    shadowColor: "#42e4d7",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 20,
},

    synopsisContainer:{
    width: '90%',
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: 'center',
    borderColor: '#42e4d7',
    backgroundColor: '#0f0f0e',
    borderWidth: 2,
    padding: 10,
    borderStyle: 'dashed',
    borderRadius: 10,
    shadowColor: "#42e4d7",
    shadowOffset: {
        width: 0,
        height: 12,
        },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 20,

    },
    synopsisText:{
        fontSize: 18,
        textAlign: 'justify',
        margin: 10,
        color: 'white',
    },
  nextButton:{
    backgroundColor: '#727373',
    width: '55%',
    padding: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    color: '#42e4d7',
    borderRadius: 10,
    shadowColor: "#42e4d7",
    shadowOffset: {
        width: 10,
        height: 0,
        },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 10,
},

  animeText:{
    fontSize: 30,
    textAlign: 'center',
    
  },
  titleText:{
      fontSize: 50,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: '#e47334',
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      textAlign: 'center',
      textShadowColor: 'rgba(66, 228, 215,0.5) ',
      textShadowOffset: { width: -3, height: 4 },
      textShadowRadius: 10, 
      elevation: 20,
  },
  text:{
      fontSize: 20,
      alignSelf: 'center',
      color: 'white',
      textAlign: 'center',
      margin: 10,
  },
  nextButtonText:{
    alignSelf: 'center',
    color: '#42e4d7',
    textAlign: 'center',
    margin: 10,
    },
  subtext:{
    fontSize:30,
    alignSelf: 'center',
    color: '#e47334',
}
})