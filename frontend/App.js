import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import SplashScreen from './screens/splashScreen/SplashScreen';
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import Home from './screens/Home/Home';
/*import TabNavigation from './screens/BottomTabNavigation/TabNavigation';*/


function StackNavigator() {
    const AuthStack= createNativeStackNavigator();
      return (
          <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
              <AuthStack.Screen name="Login" component={LoginScreen} />
              <AuthStack.Screen name="Signup" component={SignupScreen} />
              <AuthStack.Screen name="Home" component={Home} />
          </AuthStack.Navigator>
      )
}

const MainStack = () => {
  const NavigationStack= createNativeStackNavigator();

      return (
          <NavigationStack.Navigator>
              <NavigationStack.Screen name="Home" component={Home} />
              <NavigationStack.Screen name="Attendance" component={Attendance} />
              <NavigationStack.Screen name="Payments" component={Payments} />
              <NavigationStack.Screen name="NoticeBoard" component={NoticeBoard} />
          </NavigationStack.Navigator>
      )
}

export default function App() {
  const Stack= createNativeStackNavigator(); //creating the Stack const in function to create stack navigator

    const [isSplash, setisSplash]= useState(true);
    const [isLogged, setIsLogged]= useState(true);

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
                {/*isLogged ? (
                    <TabNavigation />
                ) : (
                        <StackNavigator />
                    )
                */}
                    <StackNavigator />
            </NavigationContainer>
          )
          }
        </>
      )

  }
