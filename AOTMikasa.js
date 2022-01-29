import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function App(props) {


  return (
 
    <ScrollView style={styles.container}>

        <Text style={styles.charName}>Mikasa Ackerman</Text> 
        <View style={styles.charImageContainer}>
          <Image style={styles.charImage} source={require('./assets/AOT/mikasa.jpg')}/>
        </View>
        <View style={styles.charDetails}>
          <Text style={styles.charDetailsTxt}>
            Gender: Female {"\n"}
            Birthday: February 10th{"\n"}
            Height: 176 cm{"\n"}
            Weight: 70 kg{"\n"}
            Relatives:  Ackerman clan, {"\n"} {"\t"}Mr. Ackerman (father)
          </Text>
        </View>
        <View style={styles.charBackground}>
          <Text style={styles.charBackgroundTxt}>
          {"\t"}{"\t"}{"\t"}
            is a main protagonist of the Attack on Titan anime and manga series. After witnessing the Colossus Titan destroy the Wall Maria, allowing the other titans to get in and kill his father and mother, along with destroy much of the town, he vowed to destroy every last one of the titans. He is the adoptive sister of Mikasa Ackerman, the younger paternal half brother of Zeke Jaeger.is one of the two deuteragonists of the series. She is the last descendant of the Shogun clan that stayed on Paradis Island, thereby related to the Azumabito family, and holds significant political power in Hizuru. After her mother and father were murdered by bandits, Mikasa was rescued by Eren. She lived with him and his parents for approximately one year before the Fall of Wall Maria. Though she desires only to live a peaceful life with Eren, Mikasa chose to follow him into the military—where she is considered the best soldier among the 104th Cadet Corps. She later joined the Scout Regiment to continue following and protecting Eren.
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
          