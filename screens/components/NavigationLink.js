import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const NavigationLink = ({ description, link, screenName }) => {
    const navigation= useNavigation();


  return (
      <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center pt-4">
            <Text>{description}</Text>
            <TouchableOpacity onPress={()=> navigation.push(screenName)}>
                  <Text className="text-sky-600">{link}</Text>
            </TouchableOpacity>
      </Animated.View>
  )
}

export default NavigationLink;
