import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function App(props) {


  return (
 
    <ScrollView style={styles.container}>

        <Text style={styles.charName}>Gabi Braun</Text> 
        <View style={styles.charImageContainer}>
          <Image style={styles.charImage} source={require('./assets/AOT/gabi.jpg')}/>
        </View>
        <View style={styles.charDetails}>
          <Text style={styles.charDetailsTxt}>
            Gender: Female {"\n"}
            Birthday: April 14th{"\n"}
            Height: 138 cm{"\n"}
            Weight: 30 kg{"\n"}
            Relatives: Unnamed father and mother, {"\n"} {"\t"}Karina Braun (aunt), {"\n"} {"\t"}Reiner Braun (cousin)
          </Text>
        </View>
        <View style={styles.charBackground}>
          <Text style={styles.charBackgroundTxt}>
          {"\t"}{"\t"}{"\t"}
            Gabi Braun (ガビ・ブラウン Gabi Buraun?) is an Eldian who lived in the Liberio internment zone and the cousin of Reiner Braun.[6] She is a Warrior candidate (戦士候補生 Senshi Kōho-sei?, also translated as "Warrior Cadet") that is likely to inherit the Armored Titan power. Gabi is a small, young girl with a petite yet athletic build. She has a small face with wide brown eyes and defined eyebrows, a small upturned nose and a notably radiant smile. She also has medium length black hair which she keeps half tied above her head. Like her fellow Warrior candidates, she wears the standard Marleyan soldier uniform consisting of a light jacket and pants, supply packs on the hip, suspender straps, a hard hat with a stripe around it, and tall combat boots. As an Eldian, her uniform is different from the Marleyans, as her shirt collar has a small badge with the Eldian star instead of a small clip and her hat has a white stripe with the Eldian star on it instead of a pure black stripe. However, underneath her uniform, she wears a short tattered white dress with poorly made thigh-length light-colored shorts. As is law in Marley, Gabi also wears the Eldian armband as all her family members and ancestors residing there do so as well.
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