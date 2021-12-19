import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";
import { TagSelect } from "react-native-tag-select";
import { Modal } from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";


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
    { id: 'MONDAY', label: 'Monday' },
    { id: 'TUESDAY', label: 'Tuesday' },
    { id: 'WEDNESDAY', label: 'Wednesday' },
    { id: 'THURSDAY', label: 'Thursday' },
    { id: 'FRIDAY', label: 'Friday' },
    { id: 'SATURDAY', label: 'Saturday' },
    { id: 'SUNDAY', label: 'Sunday' },
  ];


  const displayTimes = [
    { id: 1, label: '12pm' },
    { id: 2, label: '1am' },
    { id: 3, label: '2am' },
    { id: 4, label: '3am' },
    { id: 5, label: '4am' },
    { id: 6, label: '5am' },
    { id: 7, label: '6am' },
    { id: 8, label: '7am' },
    { id: 9, label: '8am' },
    { id: 10, label: '9am' },
    { id: 11, label: '10am' },
    { id: 12, label: '11am' },
    { id: 13, label: '12pm' },
    { id: 14, label: '1pm' },
    { id: 15, label: '2pm' },
    { id: 16, label: '3pm' },
    { id: 17, label: '4pm' },
    { id: 18, label: '5pm' },
    { id: 19, label: '6pm' },
    { id: 20, label: '7pm' },
    { id: 21, label: '8pm' },
    { id: 22, label: '9pm' },
    { id: 23, label: '10pm' },
    { id: 24, label: '11pm' },
   
  ];


  return( 
      <Modal
      visible={isCreateNewMedModalVisible}
      animationType="slide"
      onDismiss={() => setCreateNewMedModalVisible(false)}
      >
        <View style = {{ alignItems: 'center',alignSelf:'center', backgroundColor: 'white', width: '80%', height:'90%', paddingTop:20, borderRadius:10}}>
        <ScrollView>
            <Text>Medication Name </Text>
            <TextInput  
              placeholder = "name"
              onChangeText = {(name) => setNewMedName(name)}
              value = {name}
              />
            
            <Text>Medication days</Text>
            <TagSelect
                  keyAttr="id"
                  labelAttr="label"
                  data={displayDays} 
                  onItemPress={selection => {
                    setDays([...days, selection.label])
                  }}
                  containerStyle={{ paddingBottom: 15 }}
                />
          
                <Text>Medication frequency per day</Text>
                <TextInput 
                    keyboardType = 'numeric'
                    placeholder = "frequency per day"
                    onChangeText = {(takeFrequency) => setNewMedFrequency(takeFrequency)}
                    value = {takeFrequency}
                  />
            
                <Text>Medication time</Text>
                <TagSelect
                    keyAttr="id"
                    labelAttr="label"
                    data={displayTimes}
                    onItemPress={selection => {
                      setNewMedTimes([...atTimesToTake, selection.label])
                    }}
                    containerStyle={{ paddingBottom: 15 }}
                  />
                  <TouchableOpacity style = {{width:100, height:40, backgroundColor:'green', alignItems:'center'}}
                  onPress={() => {
                    validate()
                
                  }}
                  >
                
                <Text>Add new Medication</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{width:100, height:40, backgroundColor:'red', alignItems:'center'}}
                onPress={() => {
                  setCreateNewMedModalVisible(false)
                }}
                >
                  <Text>
                    cancel
                  </Text>
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
