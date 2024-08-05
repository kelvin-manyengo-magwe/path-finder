import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import SplashScreen from './screens/splashScreen/SplashScreen';
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';


export default function App() {
  const Stack= createNativeStackNavigator(); //creating the Stack const in function to create stack navigator

    const [isSplash, setisSplash]= useState(true);

        useEffect(() => {
            setTimeout(() => {
                setisSplash(false);
            }, 3000)

        }, []);
      return (
        <>
          {isSplash ? (
              <Animated.View style={{ flex: 1 }} entering={FadeIn.duration(1000)} exiting={FadeOut.duration(1000)}>
                  <SplashScreen />
              </Animated.View>
          ) : (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Signup" component={SignupScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          )
          }
        </>
      )

  }
