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

            <View style={styles.container} className="mt-6 mx-2">
                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity onPress={() => navigation.push('Attendance')}>
                          <Text className="font-bold text-xl">Attendance</Text>
                      </TouchableOpacity>
                </View>
                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity onPress={() => navigation.push('Payments')}>
                          <Text className="font-bold text-xl">Payments</Text>
                      </TouchableOpacity>
                </View>
                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                    <TouchableOpacity onPress={() => navigation.push('NoticeBoard')}>
                        <Text className="font-bold text-xl">Notice Board</Text>
                    </TouchableOpacity>
                </View>
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
      borderRadius: 7,
      width: '30%',
      height: '50%',
      padding: 5,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
  },
  shadowIos: { //shadow prop for ios
      shadowColor: '#171717',
      shadowOffset: {width: 3, height: 3},
      shadowOpacity: 0.2,
      shadowRadius: 3,
  },
  shadowAndroid: {
      elevation: 5,
      shadowColor: '#171717',
  }
});
