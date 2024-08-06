import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Box from '../components/Box';
import TabNavigation from '../../BottomTabNavigation/TabNavigation';


const Home = () => {

    return (
      <View className="h-full w-full bg-white">
          <StatusBar style="light" />

            <View style={styles.header} className="h-[70]">
                  <Text className="text-2xl text-white text-left font-bold ml-8 mt-2">Home</Text>
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

export default Home;

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
