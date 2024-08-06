import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Box = ({ title }) => {
    return (
      <View className="flex justify-center items-center m-2 border border-gray-300 h-[100] w-[108] rounded-lg">
          <Text className="text-center font-semibold">{title}</Text>
      </View>
    )
}

export default Box;
