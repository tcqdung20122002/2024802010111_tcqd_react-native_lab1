import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/Home';
import Project1 from '../src/Project1';
import Project2 from '../src/Project2';
import Project3 from '../src/Project3';
import Project4 from '../src/Project4';
import Project5 from '../src/Project5';
import Project6 from '../src/Project6';
import Project7 from '../src/Project7';
import Project8 from '../src/Project8';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown: false, }}
      >
       
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Project1' component={Project1} />
        <Stack.Screen name='Project2' component= {Project2} />
        <Stack.Screen name='Project3' component= {Project3} />
        <Stack.Screen name='Project4' component= {Project4} />
        <Stack.Screen name='Project5' component= {Project5} />
        <Stack.Screen name='Project6' component= {Project6} />
        <Stack.Screen name='Project7' component= {Project7} />
        <Stack.Screen name='Project8' component= {Project8} />
      </Stack.Navigator>
      
  
    
  );
}