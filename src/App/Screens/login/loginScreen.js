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
      <Text style={styles.heading1}>Welcome Back!</Text>

      <Text></Text>
      <Text style={styles.emailText}>EMAIL</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "   Email"
              onChangeText = {(email) => setEmail(email)}
              value = {email}
              />
          <Text style={styles.passText}>PASSWORD</Text>
          <TextInput 
              style = {styles.inputStyle}
              placeholder = "   Password"
              onChangeText = {(password) => setPassword(password)}
              value = {password}
              />
          <TouchableOpacity 
          onPress={() => {
            validate()
         
          }}
          style={styles.loginContainter}>
                  <Text style={styles.loginText}>
                      LOGIN
                  </Text>
          </TouchableOpacity>
      
      </View>
      )
}


export default connect(
    ({loginReducer}) => ({
      email: loginReducer.email,
      password: loginReducer.password,
    }),

     (dispatch, ownProps) => ({
      setEmail: (email) => dispatch(actions.login.SetEmail(email)),
      setPassword: (password) => dispatch(actions.login.SetPassword(password)),
      logUserIn: () => dispatch(actions.user.LogUserIn()),
      ...ownProps
    }),

  )(loginScreen)
