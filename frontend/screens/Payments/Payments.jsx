import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Payments = () => {

  return (
    <View style={styles.container} className="w-full h-full bg-white flex items-center justify-center">
        <Text className="text-bold text-2xl">Profile</Text>
    </View>
  )
}

export default Payments;


const styles= StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }
});
