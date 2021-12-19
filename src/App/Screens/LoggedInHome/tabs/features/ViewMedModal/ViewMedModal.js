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

  return( 
      <Modal
      visible={isViewModalVisible}
      animationType="slide"
      onDismiss={() => setViewModalVisible(false)
      >
      <View style = {{ alignItems: 'center',alignSelf:'center', backgroundColor: 'white', width: '80%', height:'90%', paddingTop:20, borderRadius:10}}>
      
    {selectedMedication && (
      <View>
 <Text>Medication Name </Text>
      <Text>{selectedMedication.name}</Text>
      
      <Text>Medication days</Text>
          <View>
            {selectedMedication.days.map(day => (
                <Text>{day}</Text>
            ))}
            </View>
          
      
      <Text>Medication time</Text>
      {selectedMedication.atTimesToTake.map(time => (
                <Text>{time}</Text>    
            ))}
      
          <Text>Medication frequency per day</Text>
          <Text>{selectedMedication.takeFrequency}</Text>
            
         

             
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
      

    )}
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
