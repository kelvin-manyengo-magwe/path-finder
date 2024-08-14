import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,TouchableHighlight, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputField from '../components/InputField';
import DismissKeyboard from '../components/DismissKeyboard';
import DocumentPicker from 'react-native-document-picker';



function AddStudents({ setModal }){
    const [selectedFile, setSelectedFile] = useState(null);

    return(
      <DismissKeyboard>
            <View className="w-full h-full bg-white">
                <Text className="text-center font-bold text-xl pt-2">Add Student</Text>

                    {/*adding students form*/}
                          <View className="mx-4 mt-4">

                                          <View className="mx-12">
                                              <Button title="Upload Picture" />
                                          </View>


                                    <InputField placeholder="Student's Fullname" />

                                    <InputField placeholder="Registration no" />

                                    <InputField placeholder="Password" />

                                    <InputField placeholder="Course Name" />

                                    <InputField placeholder="Guardians name" />

                                    <InputField placeholder="Guardians mobile no" />

                                    <InputField placeholder="Guardians occupation" />

                          </View>

                {/*Add and Close button view*/}
                <View style={styles.bottomButtons}>
                      <TouchableHighlight  activeOpacity={0.8} underlayColor={'bg-sky-600'} onPress={() => setModal(false)}>
                            <View className="px-8 py-2" style={styles.actualButtons}>
                                  <AntDesign name="closecircleo" style={{ color: 'white' }} size={20} />
                                  <Text className="font-bold text-white">Close</Text>
                            </View>
                      </TouchableHighlight>

                      <TouchableHighlight underlayColor={'bg-sky-600'} activeOpacity={0.8} underlayColor={'white'}>
                            <View className="px-8 py-2" style={styles.actualButtons}>
                                  <AntDesign name="pluscircleo" style={{ color: 'white' }}size={20} />
                                  <Text className="font-bold text-white">Add</Text>
                            </View>
                      </TouchableHighlight>
                </View>
            </View>
      </DismissKeyboard>
    )
}

export default AddStudents;


const styles= StyleSheet.create({
    bottomButtons: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      margin: 30
    },
    actualButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
        borderRadius: 16,
        backgroundColor: '#2A65D6',
    }
});
