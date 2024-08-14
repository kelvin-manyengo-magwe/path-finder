import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Box from '../components/Box';


const NoticeBoard = () => {
    const navigation = useNavigation();
    
    return (
      <View className="h-full w-full bg-white">
          <StatusBar style="light" />

            <View style={styles.header} className="w-full flex flex-row h-[70]">
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                          <AntDesign name="arrowleft" size={30} style={{ color: 'white', fontWeight: 'bold', padding: 10}}/>
                      </TouchableOpacity>
                      <Text className="text-2xl text-white text-left font-bold ml-8 mt-2">NoticeBoard</Text>
            </View>

            <View style={styles.grid} className="m-4">
                {/*mapping of the elements using the Array creation (lenght, mapping part(currentItem, currentIndexItem))*/}
                  {Array.from({length: 8}, (_, index) => (
                      <Box key={index} title={`Box ${index}`}/>
                    ))}
            </View>

      </View>
    )
}

export default NoticeBoard;

const styles= StyleSheet.create({
  header: {
    paddingTop: 23,
    backgroundColor: '#2A65D6'
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
