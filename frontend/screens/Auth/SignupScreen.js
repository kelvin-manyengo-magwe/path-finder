import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown, BounceIn, BounceOut, FadeIn, FadeOut} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title.js';
import InputField from '../components/InputField';
import AuthButton from '../components/AuthButton';
import NavigationLink from '../components/NavigationLink';
import axios from 'axios';



function LoginScreen(){

    const navigation= useNavigation();

    const [userData, setUserData] = useState({
        name: '', email: '', password: ''
    });

    const handleSubmit= async () => {
        await axios.post('http://192.168.26.218:5001/register', userData).then(
            (res) => console.log(res.data).catch(
              e => console.error(e)
            )
        )
    }

    //text represent the current value of onChange fx wherenever input changes

    const handleTextChange= (key, value) => {
      setUserData({ ...userData, [key]: value });
    }


  return (
      <View className="bg-white h-full w-full pt-2">
          <StatusBar style="light" />
          <Image className="h-full w-full absolute" source={require('../../assets/images/background.png')} />

          {/*lights*/}
          <View className="absolute flex-row justify-around w-full">
              <Animated.Image entering={BounceIn.delay(200).duration(1500).springify().damping(3)} className="h-[225] w-[90]" source={require('../../assets/images/light.png')} />
              <Animated.Image entering={BounceIn.delay(400).duration(1500).springify().damping(3)} className="h-[160] w-[65]" source={require('../../assets/images/light.png')}  />
          </View>

            {/*text and form*/}
                <View className="h-full w-full flex-1 pt-60 pb-10">
                {/*Title*/}
                  <Title title="Signup" />

                {/*form*/}
                <View className="flex items-center pt-20 space-y-4 mx-4">

                        {/*name*/}
                        <InputField placeholder="Name" value={userData.name} onChangeText={(text) => handleTextChange('name', text)} />

                        {/*Email*/}
                        <InputField placeholder="Email" value={userData.email} onChangeText={(text) => handleTextChange('email', text)} />

                      <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="w-full bg-black/5 p-5 rounded-2xl mb-4">
                          <TextInput placeholder="Password" placeholderTextColor={'gray'} value={userData.password} onChangeText={(text) => handleTextChange('password', text)} secureTextEntry/>
                      </Animated.View>


                        {/*loginButton*/}
                          <AuthButton handleTextChange={handleTextChange} buttonName="Signup" onPress={handleSubmit} />


                        {/*navigatio link*/}
                        <NavigationLink  description="Already have an account ? " link="Login" screenName="Login" />

                </View>
            </View>
      </View>
  )
}

export default LoginScreen;
