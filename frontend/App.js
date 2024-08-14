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
import Profile from './screens/Profile/Profile';
import Attendance from './screens/Attendance/Attendance';
import Calendar from './screens/Calendar/Calendar';
import Chats from './screens/Chats/Chats';
import Payments from './screens/Payments/Payments';
import NoticeBoard from './screens/NoticeBoard/NoticeBoard';
import Library from './screens/Library/Library';
import Homework from './screens/Homework/Homework';
import ViewStudents from './screens/Students/ViewStudents';
/*import TabNavigation from './screens/BottomTabNavigation/TabNavigation';*/



export default function App() {
  const NavigationStack= createNativeStackNavigator();  //creating the Stack const in function to create stack navigator


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
                  <NavigationStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                        {isLogged ? (
                              <>

                                  <NavigationStack.Screen name="Home" component={Home} />
                                  <NavigationStack.Screen name="Attendance" component={Attendance} />
                                  <NavigationStack.Screen name="Payments" component={Payments} />
                                  <NavigationStack.Screen name="NoticeBoard" component={NoticeBoard} />
                                  <NavigationStack.Screen name="Calendar" component={Calendar} />
                                  <NavigationStack.Screen name="Profile" component={Profile} />
                                  <NavigationStack.Screen name="Chats" component={Chats} />
                                  <NavigationStack.Screen name="Library" component={Library} />
                                  <NavigationStack.Screen name="Homework" component={Homework} />
                                  <NavigationStack.Screen name="ViewStudents" component={ViewStudents} />
                              </>
                        ) : (
                          <>
                                  <NavigationStack.Screen name="Login" component={LoginScreen} />
                                  <NavigationStack.Screen name="Signup" component={SignupScreen} />

                           </>
                        )}
                  </NavigationStack.Navigator>
            </NavigationContainer>
          )
          }
        </>
      )

  }
