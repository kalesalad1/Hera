import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";
import { Modal } from 'react-native-paper'


const CreateNewMedModal = ({
    setNewMedName,
    setNewMedTimes,
    setNewMedFrequency,
    atTimesToTake,
    name,
    takeFrequency,
    createNewMed,
    isCreateNewMedModalVisible,
    setCreateNewMedModalVisible,
}) => {
  
  const validate = () => {
    createNewMed()
    setCreateNewMedModalVisible(false)
  }



  return( 
      <Modal
      visible={isCreateNewMedModalVisible}
      animationType="slide"
      >
      <View style = {{ alignItems: 'center',alignSelf:'center', backgroundColor: 'white', width: '80%', height:'90%', paddingTop:200, borderRadius:10}}>
      <Text></Text>
      <Text>Medication Name </Text>
          <TextInput 
             
              placeholder = "name"
              onChangeText = {(name) => setNewMedName(name)}
              value = {name}
              />
          <Text>Medication frequency per day</Text>
            <TextInput 
            
                placeholder = "frequency per day"
                onChangeText = {(takeFrequency) => setNewMedFrequency(takeFrequency)}
                value = {takeFrequency}
                />
              <Text>Medication time</Text>
                <TextInput 
                
                    placeholder = "Times"
                    onChangeText = {(atTimesToTake) => setNewMedTimes(atTimesToTake)}
                    value = {atTimesToTake}
                    />
                <TouchableOpacity style = {{width:100, height:40, backgroundColor:'green', alignItems:'center'}}
                onPress={() => {
                  validate()
              
                }}
                >
                  <Text>
                      Add new Medication
                  </Text>
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
      </View>
      </Modal>    
      )
}


export default connect(
    ({medicationsReducer}) => ({
     atTimesToTake: medicationsReducer.newMedication.atTimesToTake,
     name: medicationsReducer.newMedication.name,
     takeFrequency: medicationsReducer.newMedication.takeFrequency
    }),

     (dispatch, ownProps) => ({
      setNewMedName: (email) => dispatch(actions.medications.SetNewMedName(email)),
      setNewMedTimes: (times) => dispatch(actions.medications.SetNewMedTimes(times)),
      setNewMedFrequency: (frequency) => dispatch(actions.medications.SetNewMedFrequency(frequency)),
      createNewMed: () => dispatch(actions.medications.CreateNewMed()),
      ...ownProps
    }),

  )(CreateNewMedModal)
