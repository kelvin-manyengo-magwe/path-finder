import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, BounceIn, BounceOut, FadeIn, FadeOut} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Title from './components/Title.js';
import InputField from './components/InputField';
import AuthButton from './components/AuthButton';
import NavigationLink from './components/NavigationLink';


function LoginScreen(){

    const navigation= useNavigation();
  return (
      <View className="bg-white h-full w-full pt-2">
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
                  <Title title="Login" />

                {/*form*/}
                <View className="flex items-center pt-20 space-y-8 mx-4">

                        {/*Email*/}
                        <InputField placeholder="Email" />

                      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="w-full bg-black/5 p-5 rounded-2xl mb-8">
                          <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry/>
                      </Animated.View>


                        {/*loginButton*/}
                          <AuthButton buttonName="Login" />

                        {/*navigation link*/}
                        <NavigationLink description="Don't have an account ? " link="Signup" screenName="Signup" />


                </View>
            </View>
      </View>
  )
}

export default LoginScreen;
