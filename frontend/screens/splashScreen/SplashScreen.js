import { View, Text, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown, FadeOutUp, FadeOutDown } from 'react-native-reanimated';


const SplashScreen = () => {

  return (
    <View style={styles.container} className="w-full h-full flex-1 space-y-2">
      <StatusBar style="light" />
          <Animated.Image entering={FadeInUp.duration(1500)} exiting={FadeOutUp.duration(1500)} className="h-[200] w-[300]" source={require('../../assets/images/back-to-school.jpg')} />

          <Animated.Text entering={FadeInDown.duration(1500)} exiting={FadeOutDown.duration(1500)} style={styles.text}>
              Back To School
          </Animated.Text>
    </View>
  )
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'sans-serif'
  }
}
export default SplashScreen;
