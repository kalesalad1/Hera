import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";

import styles from '../Styles/styles'

const CreateNewMedModal = ({
    setNewMedName,
    setNewMedTimes,
    setNewMedFrequency,
    atTimesToTake,
    name,
    takeFrequency,
    createNewMed,
}) => {
  
  const validate = () => {
    createNewMed()
  }



  return(     
      <View style = {{paddingTop:200}}>
      <Text></Text>
      <Text>Medication Name </Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "name"
              onChangeText = {(name) => setNewMedName(name)}
              value = {name}
              />
          <Text>Medication frequency</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "frequency"
              onChangeText = {(takeFrequency) => setNewMedFrequency(takeFrequency)}
              value = {takeFrequency}
              />
        <Text>Medication time</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "Password"
              onChangeText = {(atTimesToTake) => setNewMedTimes(atTimesToTake)}
              value = {atTimesToTake}
              />
          <TouchableOpacity 
          onPress={() => {
            validate()
         
          }}
          style={styles.loginContainter}>
                  <Text style={styles.loginText}>
                      Login
                  </Text>
          </TouchableOpacity>
      
      </View>
      )
}


export default connect(
    ({medReducer}) => ({
     atTimesToTake: medReducer.newMed.atTimesToTake,
     name: medReducer.newMed.name,
     takeFrequency: medReducer.newMed.takeFrequency
    }),

     (dispatch, ownProps) => ({
      setNewMedName: (email) => dispatch(actions.med.SetNewMedName(email)),
      setNewMedTimes: (times) => dispatch(actions.med.SetNewMedTimes(times)),
      setNewMedFrequency: (frequency) => dispatch(actions.med.SetNewMedFrequency(frequency)),
      createNewMed: () => dispatch(actions.med.CreateNewMed()),
      ...ownProps
    }),

  )(CreateNewMedModal)
