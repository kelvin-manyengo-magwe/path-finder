import { View, Text, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';


const SplashScreen = () => {

  return (
    <View style={styles.container} className="w-full h-full flex-1 space-y-2">
      <StatusBar style="light" />
          <Image className="h-[200] w-[300]" source={require('../../assets/images/back-to-school.jpg')} />
          <Text style={styles.text}>Back To School</Text>

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
