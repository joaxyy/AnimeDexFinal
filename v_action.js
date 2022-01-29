import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, ImageBackground, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'


export default class v_action extends Component{
  


      render() {
        
    return (
      <ScrollView style={styles.container}>
        
        <View style={styles.categoryContainer}>
        <ImageBackground source={require('./assets/vbg.gif')} style={{ width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden'}}>

        <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
        <Text style={styles.categoryText}>ACTION</Text>
        </View>
        
        </ImageBackground>
          
        </View>

        <View style={styles.genreContainer}>
         <Text style={styles.genreText}>CHOOSE YOUR VOTE</Text> 
        </View>

        <View style={styles.options}>
            
            <TouchableOpacity style={styles.button} onPress={() => {
              
              this.props.navigation.navigate('v_action')
              
              
            }}>
              <ImageBackground source={require('./assets/action_aot.gif')} style={styles.genreImage}>
              <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <Text style={styles.categoryText}>ATTACK ON TITAN</Text>
        </View>
        
        </ImageBackground>
              
              </TouchableOpacity>

              
          
        </View>

        <View style={styles.options}>
            
            <TouchableOpacity style={styles.button} onPress={() => {
              
              this.props.navigation.navigate('v_action')
              
              
            }}>
              <ImageBackground source={require('./assets/action_naruto.gif')} style={styles.genreImage}>
              <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <Text style={styles.categoryText}>NARUTO</Text>
        </View>
        
        </ImageBackground>
              
              </TouchableOpacity>

              
          
        </View>

        <View style={styles.options}>
            
            <TouchableOpacity style={styles.button} onPress={() => {
              
              this.props.navigation.navigate('v_action')
              
              
            }}>
              <ImageBackground source={require('./assets/action_piece.gif')} style={styles.genreImage}>
              <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <Text style={styles.categoryText}>ONE PIECE</Text>
        </View>
        
        </ImageBackground>
              
              </TouchableOpacity>

              
          
        </View>

        <View style={styles.options}>
            
            <TouchableOpacity style={styles.button} onPress={() => {
              
              this.props.navigation.navigate('v_action')
              
              
            }}>
              <ImageBackground source={require('./assets/action_punch.gif')} style={styles.genreImage}>
              <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <Text style={styles.categoryText}>ONE PUNCH MAN</Text>
        </View>
        
        </ImageBackground>
              
              </TouchableOpacity>

              
          
        </View>



      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
    },

    categoryContainer: {
        
        borderWidth: '1px',
        borderStyle:'solid',
        borderColor: 'white',
        borderRadius: 30,
        width: '85%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        marginLeft: 'auto',
        marginRight: 'auto',
        elevation: 3,
        backgroundColor: '#42e4d7',
        shadowColor: '#42e4d7',
        shadowOpacity:1,
        shadowRadius:10,
        
        
        
        
    },

    genreContainer:{
        alignSelf:'center',
        width: 400,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        borderColor: '#42e4d7',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'solid',
        shadowColor: '#42e4d7',
        shadowOpacity:.8,
        shadowRadius:15,  
        marginTop: 40,
        
    },

    options: {
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: 'white',
      marginTop: 50,
      width: 350,
      height: 250 ,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      borderColor: '#e47334',
      borderWidth: 2,
      borderRadius: 10,
      borderStyle: 'solid',
      shadowColor: '#e47334',
      shadowOpacity:.8,
      shadowRadius:20,  
      marginBottom:30, 
    },

    visit: {
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: 'white',
      marginTop: 50,
      width: 350,
      height: 120 ,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      borderColor: '#e47334',
      borderWidth: 2,
      borderRadius: 10,
      borderStyle: 'solid',
      shadowColor: '#e47334',
      shadowOpacity:.8,
      shadowRadius:20,  
      marginBottom:30, 
    },



    textContainer:{
        fontSize:30
    },

    categoryText:{
        fontSize:40,
        color:'white',
    },

    voteText:{
      fontSize:20,
      color:'white',
  },

    genreText:{
      color:'white',
      fontSize:18,

    },


    button:{
     width:'100%',
     height:'100%'
    },

    genreImage:{
      height:'100%',
      width: '100%',
      borderRadius: 10, 
      overflow: 'hidden'

    }
});