import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function App(props) {


  return (
 
    <ScrollView style={styles.container}>

        <Text style={styles.charName}>Levi Ackerman</Text> 
        <View style={styles.charImageContainer}>
          <Image style={styles.charImage} source={require('./assets/AOT/levi.jpg')}/>
        </View>
        <View style={styles.charDetails}>
          <Text style={styles.charDetailsTxt}>
            Gender: Male {"\n"}
            Birthday: December 25th{"\n"}
            Height: 160 cm{"\n"}
            Weight: 65 kg{"\n"}
            Relatives:   Ackerman clan, {"\n"} {"\t"}Kuchel Ackerman (mother, deceased), {"\n"} {"\t"}Kenny Ackerman (uncle, deceased)
          </Text>
        </View>
        <View style={styles.charBackground}>
          <Text style={styles.charBackgroundTxt}>
          {"\t"}{"\t"}{"\t"}
            Levi Ackerman (リヴァイ・アッカーマン Rivai Akkāman?), often formally referred to as Captain Levi (リヴァイ兵長 Rivai Heichō?), is one of the main characters, but also the most beloved, both in anime and in the manga Attack on Titan (Shingeki no Kyojin). He is also a captain in the Division of Knowledge and Exploration and is considered the most powerful soldier in the world due to his outstanding fighting skills. Because we are dealing with the best soldier, it is also normal not to be overwhelmed by emotions. On the contrary, he is really a cold person, even obsessed with cleanliness, a tough person in relationships with others, but he is very sincere. His leadership qualities are obvious, and his strategies and ability to find the best solutions to difficult and complex problems complete his characterization.
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