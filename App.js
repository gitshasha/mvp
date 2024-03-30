import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Components/Login';


import React, { useContext } from 'react';
import {Userprovider} from './api/Userprovider';
import Dashboard from './Components/Dashboard';
const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <Userprovider>
<NavigationContainer>
 <Stack.Navigator initialRouteName='Login'>
  
  <Stack.Screen name="Login" component={Login}/>
  <Stack.Screen name="Dash" component={Dashboard}/>
  

 
 
 </Stack.Navigator>

</NavigationContainer>
</Userprovider>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
