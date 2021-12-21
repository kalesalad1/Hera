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
      onDismiss={() => setViewModalVisible(false)}
      >
      <View style = {{ alignItems: 'center',alignSelf:'center', backgroundColor: 'white', width: '80%', height:'90%', paddingTop:20, borderRadius:10}}>
      
    {selectedMedication && (
      <View>
      <Text style={styles.subHeading}>Medication Name</Text>
      <Text style={styles.text}>{selectedMedication.name}</Text>
      
      <Text style={styles.subHeading}>Recurrence</Text>
          <View>
            {selectedMedication.days.map(day => (
                <Text style={styles.text}>{day}</Text>
            ))}
            </View>
          
      
      <Text style={styles.subHeading}>Medication Time</Text>
      {selectedMedication.atTimesToTake.map(time => (
                <Text style={styles.text}>{time}</Text>   
            ))}
      
            <Text style={styles.subHeading}>Frequency</Text>
          <Text style={styles.text}>{selectedMedication.takeFrequency}</Text>
            
         

             
                <TouchableOpacity style = {{left:45, width:100, height:40, backgroundColor:'#023E8A', alignItems:'center', borderRadius: 100, justifyContent: 'center'}}
                onPress={() => {
                  validate()
              
                }}
                
                >
                <Text style={styles.bottonText}>DELETE</Text>
                 
          </TouchableOpacity>
          <TouchableOpacity style = {{left:45, top: 10, width:100, height:40, backgroundColor:"#A1A4B2", alignItems:'center', borderRadius: 100, justifyContent: 'center'}}
          onPress={() => {
            setViewModalVisible(false)
          }}
          >
                  <Text style={styles.bottonText}>CANCEL</Text>
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
      marginBottom: 5,
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