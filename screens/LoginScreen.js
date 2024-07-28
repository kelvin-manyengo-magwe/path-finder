import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function LoginScreen(){
  return (
      <View className="bg-white h-full w-full">
          <StatusBar style="light" />
          <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

          {/*lights*/}
          <View className="absolute flex-row justify-around w-full">
              <Image className="h-[225] w-[90]" source={require('../assets/images/light.png')} />
              <Image className="h-[160] w-[65]" source={require('../assets/images/light.png')}  />
          </View>

            {/*text and form*/}
                <View className="h-full w-full flex-1 pt-60 pb-10">
                {/*Title*/}
                <View className="flex items-center">
                      <Text className="text-white font-bold text-5xl tracking-wider">
                          Login
                      </Text>
                </View>

                {/*form*/}
                <View className="flex items-center pt-40 space-y-8 mx-4">
                      <View className="w-full bg-black/5 p-5 rounded-2xl">
                          <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                      </View>

                      <View className="w-full bg-black/5 p-5 rounded-2xl mb-3">
                          <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry/>
                      </View>

                      <View className="w-full">
                          <TouchableOpacity
                              className="bg-sky-400 w-full p-3 mb-3 rounded-2xl">
                                  <Text className="font-bold text-xl text-center text-white">Login</Text>
                          </TouchableOpacity>
                      </View>
                </View>
            </View>
      </View>
  )
}

export default LoginScreen;
