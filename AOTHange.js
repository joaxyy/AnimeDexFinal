import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function App(props) {


  return (
 
    <ScrollView style={styles.container}>

        <Text style={styles.charName}>Hange Zoe</Text> 
        <View style={styles.charImageContainer}>
          <Image style={styles.charImage} source={require('./assets/AOT/hange.jpg')}/>
        </View>
        <View style={styles.charDetails}>
          <Text style={styles.charDetailsTxt}>
            Gender: Female {"\n"}
            Birthday: September 5th{"\n"}
            Height: 170 cm{"\n"}
            Weight: 60 kg{"\n"}
            Relatives: N/A
          </Text>
        </View>
        <View style={styles.charBackground}>
          <Text style={styles.charBackgroundTxt}>
          {"\t"}{"\t"}{"\t"}
            Hange Zoë (ハンジ・ゾエ Hanji Zoe?) was the 14th commander (団長 Danchō?) of the Survey Corps, named so by Erwin Smith before his death.[6] Hange was formerly a squad leader (分隊長 Bun-taichō?) in charge of the Fourth Squad, having the duties of innovative inventing and conducting research on Titans, including Eren Yeager. After being promoted to commander, Hange was also in charge of expedition planning, management of the regiment, recruiting, and all the other responsibilities previously handled by Erwin. Upon their death, they were succeeded by Armin Arlert.
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