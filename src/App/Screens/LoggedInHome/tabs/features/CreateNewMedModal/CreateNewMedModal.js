import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";
import { TagSelect } from "react-native-tag-select";
import { Modal } from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
//import {styles} from './styles';


const CreateNewMedModal = ({
    setNewMedName,
    setNewMedTimes,
    setNewMedFrequency,
    atTimesToTake,
    name,
    days,
    takeFrequency,
    createNewMed,
    isCreateNewMedModalVisible,
    setCreateNewMedModalVisible,
    setDays,
}) => {
  
  const validate = () => {
    createNewMed()
    setCreateNewMedModalVisible(false)
  }

  const displayDays = [
    { id: 'MONDAY', label: 'M' },
    { id: 'TUESDAY', label: 'T' },
    { id: 'WEDNESDAY', label: 'W' },
    { id: 'THURSDAY', label: 'Th' },
    { id: 'FRIDAY', label: 'F' },
    { id: 'SATURDAY', label: 'S' },
    { id: 'SUNDAY', label: 'Su' },
  ];


  const displayTimes = [
    { id: 1, label: '12 PM' },
    { id: 2, label: '1 AM' },
    { id: 3, label: '2 AM' },
    { id: 4, label: '3 AM' },
    { id: 5, label: '4 AM' },
    { id: 6, label: '5 AM' },
    { id: 7, label: '6 AM' },
    { id: 8, label: '7 AM' },
    { id: 9, label: '8 AM' },
    { id: 10, label: '9 AM' },
    { id: 11, label: '10 AM' },
    { id: 12, label: '11 AM' },
    { id: 13, label: '12 AM' },
    { id: 14, label: '1 PM' },
    { id: 15, label: '2 PM' },
    { id: 16, label: '3 PM' },
    { id: 17, label: '4 PM' },
    { id: 18, label: '5 PM' },
    { id: 19, label: '6 PM' },
    { id: 20, label: '7 PM' },
    { id: 21, label: '8 PM' },
    { id: 22, label: '9 PM' },
    { id: 23, label: '10 PM' },
    { id: 24, label: '11 PM' },
   
  ];

  //<Text>Medication Name </Text>
  //<Text>Medication days</Text>
  //<Text>Medication frequency per day</Text>
  //<Text>Medication time</Text>

  return( 
      <Modal
      visible={isCreateNewMedModalVisible}
      animationType="slide"
      onDismiss={() => setCreateNewMedModalVisible(false)}
      >
        <View style = {{ alignItems: 'center',alignSelf:'center', backgroundColor: 'white', width: '80%', height:'95%', paddingTop:20, borderRadius:10}}>
        <ScrollView>
            <Text style={styles.subHeading}>Medication Name</Text>
            
            <TextInput  
              placeholder = "   Name"
              onChangeText = {(name) => setNewMedName(name)}
              value = {name}
              style={styles.text}
              />
            
            <Text style={styles.subHeading}>Recurrence</Text>
            <TagSelect
                  keyAttr="id"
                  labelAttr="label"
                  data={displayDays} 
                  onItemPress={selection => {
                    setDays([...days, selection.label])
                  }}
                  containerStyle={{ paddingBottom: 0.5 }}
                />
          
                <Text style={styles.subHeading}>Frequency</Text>
                
                <TextInput 
                    keyboardType = 'numeric'
                    placeholder = "     frequency per day"
                    onChangeText = {(takeFrequency) => setNewMedFrequency(takeFrequency)}
                    value = {takeFrequency}
                    style={styles.text}
                  />
            
                
                <Text style={styles.subHeading}>What time would you like to take the medication?</Text>
                <Text></Text>
                <TagSelect
                    keyAttr="id"
                    labelAttr="label"
                    data={displayTimes}
                    onItemPress={selection => {
                      setNewMedTimes([...atTimesToTake, selection.label])
                    }}
                    containerStyle={{ paddingBottom: 15 }}
                  />
                  <TouchableOpacity style = {{left:120, width:100, height:40, backgroundColor:'#023E8A', alignItems:'center', borderRadius: 100, justifyContent: 'center'}}
                  onPress={() => {
                    validate()
                
                  }}
                  >
                <Text style={styles.bottonText}>CREATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{left:120, top: 10, width:100, height:40, backgroundColor:"#A1A4B2", alignItems:'center', borderRadius: 100, justifyContent: 'center'}}
                onPress={() => {
                  setCreateNewMedModalVisible(false)
                }}
                >
                <Text style={styles.bottonText}>CANCEL</Text>

                </TouchableOpacity>
                </ScrollView>
            </View>
        </Modal>    
      )
}


export default connect(
    ({medicationsReducer}) => ({
     atTimesToTake: medicationsReducer.newMedication.atTimesToTake,
     name: medicationsReducer.newMedication.name,
     takeFrequency: medicationsReducer.newMedication.takeFrequency,
     days: medicationsReducer.newMedication.days,

    }),

     (dispatch, ownProps) => ({
      setNewMedName: (email) => dispatch(actions.medications.SetNewMedName(email)),
      setNewMedTimes: (times) => dispatch(actions.medications.SetNewMedTimes(times)),
      setNewMedFrequency: (frequency) => dispatch(actions.medications.SetNewMedFrequency(frequency)),
      createNewMed: () => dispatch(actions.medications.CreateNewMed()),
      setDays: (days) => dispatch(actions.medications.SetDays(days)),
      ...ownProps
    }),

  )(CreateNewMedModal)

  
const styles = StyleSheet.create({
  subHeading: {
      fontFamily: 'HelveticaNeue',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#A1A4B2',
      lineHeight: 30,
  },
  text: {
      textAlign: 'left',
      marginTop: 5,
      fontFamily: 'HelveticaNeue',
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 16,
      color: 'black',
      left: 20,
  },
  bottonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    fontFamily: 'HelveticaNeue',
},

});