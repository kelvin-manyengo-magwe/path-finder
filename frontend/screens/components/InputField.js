import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';


function InputField({ placeholder, delay, secureTextEntry, value, onChangeText }) {



  return (
    <Animated.View entering={FadeInDown.duration(1000).springify()} className="w-full bg-black/5 p-5 rounded-2xl mt-4">

        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} placeholderTextColor={'gray'} />
    </Animated.View>
  )
}

export default InputField;
