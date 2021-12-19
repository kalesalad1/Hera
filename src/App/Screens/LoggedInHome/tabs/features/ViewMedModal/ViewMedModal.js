import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";
import { Modal } from 'react-native-paper'


const ViewNewMedModal = ({
    selectedMedication,
    isViewModalVisible,
    setViewModalVisible,
    deleteMedication,

}) => {
  
  const validate = () => {
    deleteMedication(selectedMedication.name)
    setViewModalVisible(false)
  }

console.log(isViewModalVisible)

  return( 
      <Modal
      visible={isViewModalVisible}
      animationType="slide"
      >
      <View style = {{ alignItems: 'center',alignSelf:'center', backgroundColor: 'white', width: '80%', height:'90%', paddingTop:200, borderRadius:10}}>
      
      <Text>Medication Name </Text>
      <Text>{selectedMedication.name}</Text>
      
          <Text>Medication frequency per day</Text>
          <Text>{selectedMedication.takeFrequency}</Text>
            
              <Text>Medication time</Text>
              <Text>{selectedMedication.atTimesToTake}</Text>

             
                <TouchableOpacity style = {{width:100, height:40, backgroundColor:'red', alignItems:'center'}}
                onPress={() => {
                  validate()
              
                }}
                >
                  <Text>
                     delete medication
                  </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {{width:100, height:40, backgroundColor:'green', alignItems:'center'}}
          onPress={() => {
            setViewModalVisible(false)
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
        selectedMedication: medicationsReducer.selectedMedication,
    
    }),

     (dispatch, ownProps) => ({
      deleteMedication: (name) => dispatch(actions.medications.DeleteMedication(name)),
      ...ownProps
    }),

  )(ViewNewMedModal)
