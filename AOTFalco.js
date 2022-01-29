import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function App(props) {


  return (
 
    <ScrollView style={styles.container}>

        <Text style={styles.charName}>Flaco  Grice</Text> 
        <View style={styles.charImageContainer}>
          <Image style={styles.charImage} source={require('./assets/AOT/falco.jpg')}/>
        </View>
        <View style={styles.charDetails}>
          <Text style={styles.charDetailsTxt}>
            Gender: Male {"\n"}
            Birthday: February 10th{"\n"}
            Height: 140 cm{"\n"}
            Weight: 34 kg{"\n"}
            Relatives: Unnamed father and mother, {"\n"} {"\t"}Colt Grice (brother), {"\n"} {"\t"}Grice (uncle)
          </Text>
        </View>
        <View style={styles.charBackground}>
          <Text style={styles.charBackgroundTxt}>
          {"\t"}{"\t"}{"\t"}
            Falco Grice (ファルコ・グライス Faruko Guraisu?) is an Eldian Warrior candidate (戦士候補生 Senshi Kōho-sei?, also translated as "Warrior Cadet") working for the Marley government and the younger brother of Colt Grice. Originally one of the main candidates to inherit the Armored Titan power, Falco possessed the Jaw Titan, having inadvertently inherited it from Porco Galliard after being turned into a Pure Titan by Zeke Yeager.
          </Text>
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
    
    charName: {
    position:'relative',
    fontSize: 40,
    textAlign: 'center',
    fontWeight : 'bold' ,
    margin: 10,
    color: '#e47334',
    textShadowColor: 'rgba(66, 228, 215,0.5) ',
    textShadowOffset: { width: -2, height: 4 },
    textShadowRadius: 14, 
    elevation: 20,
    },

    charImage:{
    position:'relative',
    height:200,
    width:200,
    borderRadius:6,
    alignSelf: 'center',
    },

    charImageContainer:{
        width: 210,
        height: 210,
        alignSelf: 'center',
        alignItems: 'center',
        margin: 20,
        borderColor: '#42e4d7',
        borderRadius: 10,
        borderWidth: 2,
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
 charDetails: {
    position:'relative',
    backgroundColor: '#0f0f0e',
    margin: 10,
    color: 'white',
    borderColor: '#42e4d7',
    borderWidth: 2,
    borderRadius:6,
    borderStyle: 'dashed',
    shadowColor: "#42e4d7",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10,
  },
  charDetailsTxt: {
    padding:9,
    fontSize: 15,
    textAlign: 'left',
    fontWeight : 'bold' ,
    margin: 10,
    color: 'white',
  },
charBackground:{
  position:'relative',
  backgroundColor: '#0f0f0e',
  borderStyle: 'dashed',
  padding:9,
  margin: 10,
  borderColor: '#42e4d7',
  borderRadius: 10,
  borderWidth: 2,
  borderStyle: 'dashed',
  shadowColor: "#42e4d7",
  shadowOffset: {
      width: 4,
      height: 12,
  },
  shadowOpacity: 0.1,
  shadowRadius: 16.00,
  elevation: 10,
},

charBackgroundTxt:{
    fontSize: 14,
    textAlign: 'justify',
    fontWeight : 'normal' ,
    color: 'white',
}
});