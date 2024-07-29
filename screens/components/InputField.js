import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';


function InputField({ placeholder, delay, secureTextEntry }) {

  return (
    <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full bg-black/5 p-5 rounded-2xl">
        <TextInput placeholder={placeholder} placeholderTextColor={'gray'} />
    </Animated.View>
  )
}

export default InputField;
