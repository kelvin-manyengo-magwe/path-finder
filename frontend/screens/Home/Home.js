import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
    const navigation= useNavigation();

    return (
      <View className="h-full w-full bg-white">
          <StatusBar style="light" />

            <View style={styles.header} className="h-[70]">
                  <Text className="text-2xl text-white text-left font-bold ml-8 mt-2">Home</Text>
            </View>

            <View style={styles.container} className="m-4">
                  <TouchableOpacity styles={style.box} onPress={() => navigation.push('Attendance')}>
                      <Text className="font-bold text-xl">Attendance</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.push('Payments')}>
                      <Text className="font-bold text-xl">Payments</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.push('NoticeBoard')}>
                      <Text className="font-bold text-xl">Notice Board</Text>
                  </TouchableOpacity>
            </View>


      </View>
    )
}

export default Home;

const styles= StyleSheet.create({
  header: {
    paddingTop: 23,
    backgroundColor: '#2A65D6'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box: {
      backgroundColor: 'lightblue',
      width: '30%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
  }
});
