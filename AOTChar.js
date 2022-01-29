import React, {useState} from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View, Button, Alert, SafeAreaView,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default function AOTChar (props){
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleText}>Attack on Titan {"\n"} &nbsp;&nbsp; Characters</Text>
            
        
                
                <View style={styles.animeCharContainer}>
                    
                    
                    <View style={styles.animeCharPic}>

                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTEren');  }}>
                            <Image style={styles.photo} source={require('./assets/AOT/eren.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    
                   
                     
                    <View style={styles.animeCharPic}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTMikasa');  }}>
                            <Image style={styles.photo} source={require('./assets/AOT/mikasa.jpg')}></Image>
                            </TouchableOpacity>
                    </View>
                </View>

                    <View style={styles.animeCharContainer}>
                        
                        
                        <View style={styles.textContainer}>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('AOTEren');  }}>
                                <Text style={styles.text}> Eren {"\n"} Yeager </Text>
                            </TouchableOpacity>
                        </View>
                        
                    
                        
                        <View style={styles.textContainer}>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('AOTMikasa');  }}>
                                <Text style={styles.text}>Mikasa Ackerman</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                <View style={styles.animeCharContainer}>

                    <View style={styles.animeCharPic}>
                    <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTArmin');  }}>
                    <Image style={styles.photo} source={require('./assets/AOT/armin.jpg')}></Image>
                    </TouchableOpacity>
                    </View>
                     
                    <View style={styles.animeCharPic}>
                    <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTLevi');  }}>
                    <Image style={styles.photo} source={require('./assets/AOT/levi.jpg')}></Image>
                    </TouchableOpacity>
                    </View>
                    
                </View>

                    <View style={styles.animeCharContainer}>
                            
                            
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('AOTArmin');  }}>
                                    <Text style={styles.text}> Armin {"\n"} Arlert </Text>
                                </TouchableOpacity>
                            </View>
                            
                        
                            
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('AOTLevi');  }}>
                                    <Text style={styles.text}>Levi Ackerman</Text>
                                </TouchableOpacity>
                            </View>
                    </View>    

                <View style={styles.animeCharContainer}>
                    <View style={styles.animeCharPic}>
                    <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTHange');  }}>
                    <Image style={styles.photo} source={require('./assets/AOT/hange.jpg')}></Image>
                    </TouchableOpacity>
                    </View>
                     
                    <View style={styles.animeCharPic}>
                    <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTReiner');  }}>
                    <Image style={styles.photo} source={require('./assets/AOT/reiner.jpg')}></Image>
                    </TouchableOpacity>
                    </View>
                    
                </View>
                    <View style={styles.animeCharContainer}>
                            
                            
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('AOTHange');  }}>
                                    <Text style={styles.text}> Hange {"\n"} Zoe </Text>
                                </TouchableOpacity>
                            </View>
                            
                        
                            
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('AOTReiner');  }}>
                                    <Text style={styles.text}>Reiner {'\n'}Braun</Text>
                                </TouchableOpacity>
                            </View>
                    </View>

                <View style={styles.animeCharContainer}>
                    <View style={styles.animeCharPic}>
                    <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTGabi');  }}>
                    <Image style={styles.photo} source={require('./assets/AOT/gabi.jpg')}></Image>
                    </TouchableOpacity>
                    </View>
                     
                    <View style={styles.animeCharPic}>
                    <TouchableOpacity onPress={() => {
                            props.navigation.navigate('AOTFalco');  }}>
                    <Image style={styles.photo} source={require('./assets/AOT/falco.jpg')}></Image>
                    </TouchableOpacity>
                    </View>
                    
                </View>
                
                    <View style={styles.animeCharContainer}>
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('AOTGabi');  }}>
                                    <Text style={styles.text}> Gabi {'\n'}Braun</Text>
                                </TouchableOpacity>
                            </View>
                            
                        
                            
                            <View style={styles.textContainer}>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate('AOTFalco');  }}>
                                    <Text style={styles.text}> Falco {"\n"} Grice </Text>
                                </TouchableOpacity>
                            </View>
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
    
      animeCharContainer:{
         flexDirection: 'row',
         maxWidth: '100%'

    },
      animeCharPic:{
        width: 150,
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
      titleText:{
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#e47334',
        margin: 20,
        justifyContent: 'center',
        textShadowColor: 'rgba(66, 228, 215,0.5) ',
        textShadowOffset: { width: -2, height: 4 },
        textShadowRadius: 14, 
        elevation: 20,
        
    },
    textContainer:{
        width: 150,
        backgroundColor: 'rgba(15, 15, 14,1)',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -15,
        borderColor: '#42e4d7',
        borderRadius: 10,
        borderWidth: 2,
        borderStyle: 'dashed',
        shadowColor: "#42e4d7",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 16.00,
        elevation: 20,
    },
    text:{
        color: 'white',
        fontWeight:'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    photo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 145,
        height: 150,
        borderRadius: 10,
    }
})