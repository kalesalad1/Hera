import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";
import { Modal } from 'react-native-paper'


const ViewNewMedModal = ({
    selectedMedication,
    // setNewMedTimes,
    // setNewMedFrequency,
    // atTimesToTake,
    // name,
    // takeFrequency,
    // createNewMed,
    // isCreateNewMedModalVisible,
    // setCreateNewMedModalVisible,
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
      {/* <Text></Text>
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
          </TouchableOpacity> */}
      </View>
      </Modal>    
      )
}


export default connect(
    ({medicationsReducer}) => ({
        selectedMedication: medicationsReducer.selectedMedication,
    
    }),

     (dispatch, ownProps) => ({
      deleteMedication: (name) => dispatch(actions.medications.DeleteMedication(name)),
     
      ...ownProps
    }),

  )(CreateNewMedModal)
