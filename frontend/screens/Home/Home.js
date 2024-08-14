import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';



const Home = () => {
    const navigation= useNavigation();

    return (
      <View className="h-full w-full bg-white">
          <StatusBar style="light" />

            <View style={styles.header} className="h-[70]">
                  <Text className="text-2xl text-white text-left font-bold ml-8 mt-2">Home</Text>
            </View>

            <View style={styles.container} className="mt-2 mx-2">
                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('ViewStudents')}>
                          <FontAwesome6 name="user-graduate" size={50} />
                          <Text className="font-bold text-xl">Students</Text>
                      </TouchableOpacity>
                </View>
                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Payments')}>
                          <FontAwesomeIcon name="money" size={50} />
                          <Text className="font-bold text-xl">Payments</Text>
                      </TouchableOpacity>
                </View>
                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                    <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('NoticeBoard')}>
                        <FontAwesomeIcon name="clipboard" size={50} />
                        <Text className="font-bold text-xl">Notice Board</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Calendar')}>
                          <FontAwesomeIcon name="calendar" size={50} />
                          <Text className="font-bold text-xl">Calendar</Text>
                      </TouchableOpacity>
                </View>

                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Profile')}>
                          <AntDesign name="profile" size={50} />
                          <Text className="font-bold text-xl">Profile</Text>
                      </TouchableOpacity>
                </View>

                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Chats')}>
                          <AntDesign name="wechat" size={50} />
                          <Text className="font-bold text-xl">Chats</Text>
                      </TouchableOpacity>
                </View>

                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Chats')}>
                          <FontAwesome5 name="calendar-plus" size={50} />
                          <Text className="font-bold text-xl">Attendance</Text>
                      </TouchableOpacity>
                </View>

                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Chats')}>
                          <MaterialCommunityIcons name="bookshelf" size={50} />
                          <Text className="font-bold text-xl">Library</Text>
                      </TouchableOpacity>
                </View>

                <View style={[styles.shadowAndroid, styles.box, styles.shadowIos]}>
                      <TouchableOpacity className="flex justify-center items-center gap-2" onPress={() => navigation.navigate('Chats')}>
                          <Entypo name="open-book" size={50} />
                          <Text className="font-bold text-xl">Homework</Text>
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
      height: 140,
      padding: 5,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 30
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
