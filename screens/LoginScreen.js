import React from 'react';
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function LoginScreen(){
  return (
      <View className="bg-white h-full w-full">
          <StatusBar style="light" />
          <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />
      </View>
  )
}

export default LoginScreen;
