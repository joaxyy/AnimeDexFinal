import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView,FlatList,ScrollView, StatusBar,Separator,Image, TouchableOpacity,ActivityIndicator } from 'react-native';
import {Component} from 'react'

export default function Top (props){

 return (

    

     <View style={styles.container}>
         <Text style={styles.titleText}> Top Trending Animes</Text>
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.navigate('AOT');  }}>  

                <View style={styles.animeContainer}>
                <View style={styles.rankContainer}> 
                <Text style={styles.rankText}>1 </Text>
                 </View>
                 <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime1.png')}></Image>
                 <Text style={styles.animeText}>Attack {"\n"}On{"\n"}Titan </Text>     
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {
                props.navigation.navigate('Horimiya');  }}>
                
                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>2 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime2.jpg')}></Image>
                    <Text style={styles.animeText}>Horimiya</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {  
                props.navigation.navigate('Tokyo');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>3 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime3.png')}></Image>
                    <Text style={styles.animeText}>Tokyo{"\n"}Revengers</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { 
                props.navigation.navigate('Demon');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>4 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime4.png')}></Image>
                    <Text style={styles.animeText}>Demon{"\n"}Slayer</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {
                
                props.navigation.navigate('Higehiro');  }}>
                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>5 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime5.jpg')}></Image>
                    <Text style={styles.animeText}>Higehiro</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { 
                props.navigation.navigate('JJK');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>6 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime6.png')}></Image>
                    <Text style={styles.animeText}>Jujutsu{"\n"}Kaisen</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { 
                props.navigation.navigate('BunnyGirlSenpai');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}>7 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime7.jpg')}></Image>
                    <Text style={styles.animeText7}>Rascal Does Not{"\n"}Dream of Bunny{"\n"}Girl Senpai</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { 
                props.navigation.navigate('Kakegurui');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}> 8 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime8.png')}></Image>
                    <Text style={styles.animeText10}>Kakegurui</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { 
                props.navigation.navigate('Haikyu');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer}> 
                    <Text style={styles.rankText}> 9 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime9.jpg')}></Image>
                    <Text style={styles.animeText}>Haikyu</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { 
                props.navigation.navigate('TG');  }}>

                <View style={styles.animeContainer}>
                    <View style={styles.rankContainer10}> 
                    <Text style={styles.rankText10}> 10 </Text>
                    </View>
                    <Image style={styles.photo} source={require('./assets/TOPANIMES/Tanime10.jpg')}></Image>
                    <Text style={styles.animeText}>Tokyo {"\n"}Ghoul</Text>
                </View>
            </TouchableOpacity>

        </ScrollView>
   </View>

 );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0f0e',
      color: 'white',
    },
    animeContainer:{
        backgroundColor: '#2b2121',
        width: '87%',
        paddingLeft: 30,
        paddingRight: 30,
        marginVertical: 8,
        marginHorizontal: 16,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#42e4d7",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 20,
        borderRadius: 10,
        borderColor: '#42e4d7',
        borderWidth: 1,
    },
    rankContainer:{
        backgroundColor: '#e47334',
        marginLeft: -25,
        marginTop: -55,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    rankContainer10:{
        backgroundColor: '#e47334',
        marginLeft: -25,
        marginTop: -55,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    rankText:{
        fontSize:70,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        color: '#42e4d7',
    },
    rankText10:{
        fontSize:70,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#42e4d7',
    },

    titleText:{
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 20,
        color: '#e47334',
        textShadowColor: 'rgba(66, 228, 215,0.5) ',
        textShadowOffset: { width: -1, height: 4 },
        textShadowRadius: 10, 
        elevation: 20,
    },
    animeText:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center',
        color: 'white',
    },
    animeText7:{
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignItems: 'center',
        color: 'white',

    },
    animeText10:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
    },
    scrollView: {
        flexGrow: 1,
      },
      photo: {
        width: 100,
        height: 150,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,

    },
})