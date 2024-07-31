import React from 'react';
import { View, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const Title= ({ title }) => {

    return(
      <View className="flex items-center">
            <Animated.Text entering={FadeIn.duration(1000).springify()} className="text-white font-bold text-5xl pt-2 tracking-wider">
                {title}
            </Animated.Text>
      </View>
    )
}


export default Title;
