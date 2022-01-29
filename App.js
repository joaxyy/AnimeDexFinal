import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Voting from './Voting';
import Welcome from './Welcome';
import Rank from './Top';
import Visitor from './Visitor';
import v_action from './v_action';
import AOT from './AOT';
import AOTChar from './AOTChar';
import AOTEren from './AOTEren';
import AOTMikasa from './AOTMikasa';
import AOTArmin from './AOTArmin';
import AOTLevi from './AOTLevi';
import AOTFalco from './AOTFalco';
import AOTGabi from './AOTGabi';
import AOTHange from './AOTHange';
import AOTReiner from './AOTReiner';
import Horimiya from './Horimiya';
import HoriChar from './HoriChar';
import Tokyo from './Tokyo';
import TokyoChar from './TokyoChar';



function NewsScreen({ navigation }) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text style={{fontSize:30}}>
        This is the News Page
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

 function myDrawer () {
 return(
 <Drawer.Navigator initialRouteName="Home" 
 
 screenOptions={{
     drawerStyle: {
       backgroundColor: '#e47334',
       width: 300,    
 },
     headerStyle: {
       backgroundColor: '#e47334',
 },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
 }
}}>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="Rank" component={Rank} />
    <Drawer.Screen name="Vote" component={Voting} />
  </Drawer.Navigator>
 );
 };

const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions ={{
          headerStyle: {
            backgroundColor: '#595959'

          },
          headerTintColor: 'black',
          
          headerTitle: '',
          headerLeftContainerStyle: {
             paddingLeft: 20,
          }
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
 
        />
        <Stack.Screen 
          name="myDrawer" 
          component={myDrawer}
          options={{ headerShown: false }}
           />

        <Stack.Screen 
          name="AOT" 
          component={AOT}
           />
           

        <Stack.Screen 
          name="AOTChar" 
          component={AOTChar}
           /> 

        <Stack.Screen 
          name="AOTEren" 
          component={AOTEren}
           />

        <Stack.Screen 
          name="AOTMikasa" 
          component={AOTMikasa}
           />

        <Stack.Screen 
          name="AOTArmin" 
          component={AOTArmin}
           />

        <Stack.Screen 
          name="AOTFalco" 
          component={AOTFalco}
           />

           <Stack.Screen 
          name="AOTGabi" 
          component={AOTGabi}
           />

           <Stack.Screen 
          name="AOTHange" 
          component={AOTHange}
           />

           <Stack.Screen 
          name="AOTReiner" 
          component={AOTReiner}
           />

           <Stack.Screen 
          name="AOTLevi" 
          component={AOTLevi}
           />

         <Stack.Screen 
          name="Horimiya" 
          component={Horimiya}
           />

         <Stack.Screen 
          name="HoriChar" 
          component={HoriChar}
           />

          <Stack.Screen 
          name="Tokyo" 
          component={Tokyo}
           />    
           

           <Stack.Screen 
          name="TokyoChar" 
          component={TokyoChar}
           />

           <Stack.Screen 
          name="Visitor" 
          component={Visitor}
           />

          <Stack.Screen 
          name="v_action" 
          component={v_action}
           />

           </Stack.Navigator>
    </NavigationContainer>
    );
};
  

export default MyStack