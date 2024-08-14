import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddStudents from './AddStudents';




const ViewStudents = () => {

    const navigation = useNavigation();

    const [modal, setModal]= useState(false);

  return (
    <>
        <View className="h-full w-full bg-white">
              <View style={styles.header} className="w-full bg-white flex flex-row h-[70]">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={30} style={{ color: 'white', fontWeight: 'bold', padding: 10}}/>
                    </TouchableOpacity>
                    <Text className="text-2xl text-white text-left font-bold ml-4 mt-2">Students</Text>
              </View>

              <View className="flex flex-row it3ems-center gap-2 m-2">
                  <FontAwesome5 name="user-graduate" size={23} />
                  <Text className="text-left text-xl font-bold">Students list</Text>
              </View>

              <View style={styles.addStudents}>
                  <TouchableOpacity accessibilityLabel="Add students" accessibilityRole="button" onPress={() => setModal(!modal)}>
                        <View style={styles.button}>
                            <AntDesign name="adduser" size={20} style={{ color: 'white' }} />
                            <Text style={{color: 'white' }}>Add students</Text>
                        </View>
                  </TouchableOpacity>
              </View>

              <Modal animationType={"slide"} transparent={false} visible={modal} onRequestClose={() => Alert.alert('Modal has now been closed.')}>
                    <AddStudents setModal={setModal} />
              </Modal>
        </View>
    </>
  )
}

export default ViewStudents;


const styles= StyleSheet.create({
    header: {
      paddingTop: 23,
      backgroundColor: '#2A65D6'
    },
    addStudents: {
      marginLeft: 280,
      marginRight: 10,
      padding: 5,
      backgroundColor: '#2A65D6',
      borderRadius: 10,
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 5,
    }
});
