import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import DrawerNavigation from './navigation/DrawerNavigation'
import LoginScreen from "./screens/Login"
import RegisterScreen from "./screens/Register"
import{createStackNavigator} from '@react-navigation/stack'
import * as firebase from 'firebase'
import {firebaseConfig} from './config'

const Stack = createStackNavigator()

const StackNav = () => {
  return(
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
     <Stack.Screen name="Dashboard" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    
    <NavigationContainer>
    <StackNav />
    </NavigationContainer>
    
  );
}
