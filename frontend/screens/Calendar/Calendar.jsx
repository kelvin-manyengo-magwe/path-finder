import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Calendar = () => {

  return (
    <View style={styles.container} className="w-full h-full bg-white flex items-center justify-center">
        <Text className="text-bold text-2xl">Calendar</Text>
    </View>
  )
}

export default Calendar;


const styles= StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    }
});
