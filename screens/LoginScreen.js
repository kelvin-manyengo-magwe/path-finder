import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, BounceIn, BounceOut, FadeIn, FadeOut} from 'react-native-reanimated';



function LoginScreen(){
  return (
      <View className="bg-white h-full w-full">
          <StatusBar style="light" />
          <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

          {/*lights*/}
          <View className="absolute flex-row justify-around w-full">
              <Animated.Image entering={BounceIn.delay(200).duration(1500).springify().damping(3)} className="h-[225] w-[90]" source={require('../assets/images/light.png')} />
              <Animated.Image entering={BounceIn.delay(400).duration(1500).springify().damping(3)} className="h-[160] w-[65]" source={require('../assets/images/light.png')}  />
          </View>

            {/*text and form*/}
                <View className="h-full w-full flex-1 pt-60 pb-10">
                {/*Title*/}
                <View className="flex items-center">
                      <Animated.Text entering={FadeIn.duration(1000).springify()} className="text-white font-bold text-5xl tracking-wider">
                          Login
                      </Animated.Text>
                </View>

                {/*form*/}
                <View className="flex items-center pt-40 space-y-8 mx-4">
                      <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full bg-black/5 p-5 rounded-2xl">
                          <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                      </Animated.View>

                      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="w-full bg-black/5 p-5 rounded-2xl mb-3">
                          <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry/>
                      </Animated.View>

                      <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                          <TouchableOpacity
                              className="bg-sky-400 w-full p-3 mb-3 rounded-2xl">
                                  <Text className="font-bold text-xl text-center text-white">Login</Text>
                          </TouchableOpacity>
                      </Animated.View>

                      <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                            <Text>Don't have an account ?</Text>
                            <TouchableOpacity>
                                  <Text className="text-sky-600">Signup</Text>
                            </TouchableOpacity>
                      </Animated.View>
                </View>
            </View>
      </View>
  )
}

export default LoginScreen;
