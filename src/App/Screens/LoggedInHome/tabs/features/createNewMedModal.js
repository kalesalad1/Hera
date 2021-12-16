import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";

import styles from '../Styles/styles'

const loginScreen = ({
  logUserIn,
  setEmail,
  setPassword,
  email,
  password,
}) => {
  
  const validate = () => {
    logUserIn()
  }



  return(     
      <View style = {{paddingTop:200}}>
      <Text></Text>
      <Text>Email</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "email"
              onChangeText = {(email) => setEmail(email)}
              value = {email}
              />
          <Text>Password</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "Password"
              onChangeText = {(password) => setPassword(password)}
              value = {password}
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
     date: medReducer.newMed.date,
    }),

     (dispatch, ownProps) => ({
      createNewMed: (email) => dispatch(actions.med.createNewMed(email)),
      ...ownProps
    }),

  )(loginScreen)
