import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';


const AuthButton = ({ buttonName, onPress, handleTextChange }) => {

   return (
     <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
         <TouchableOpacity
             className="bg-sky-400 w-full p-3 mb-3 rounded-2xl" onPress={onPress}>
                 <Text className="font-bold text-xl text-center text-white">{buttonName}</Text>
         </TouchableOpacity>
     </Animated.View>
   )
}

export default AuthButton;
