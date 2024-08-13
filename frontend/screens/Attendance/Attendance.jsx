import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';




const Attendance = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.header} className="w-full h-full bg-white flex flex-row h-[70]">
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={30} style={{ color: 'white', fontWeight: 'bold', padding: 10}}/>
          </TouchableOpacity>
          <Text className="text-2xl text-white text-left font-bold ml-4 mt-2">Attendance</Text>
    </View>
  )
}

export default Attendance;


const styles= StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    header: {
      paddingTop: 23,
      backgroundColor: '#2A65D6'
    }
});
