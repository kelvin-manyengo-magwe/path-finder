import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,TouchableHighlight, Modal } from 'react-native';

function Library() {

  return (
    <View style={styles.root}>
        <Text className="text-bold text-xl text-center">Library</Text>
    </View>
  )
}

export default Library;


const styles= StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
