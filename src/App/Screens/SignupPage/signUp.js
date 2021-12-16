import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet} from "react-native";

import styles from '../Styles/styles'

const signUp = ({
  userSignUp,
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  email,
  password,
  firstName,
  lastName,
}) => {
  
  const validate = () => {
    userSignUp()
  }



  return(     
      <View style = {{paddingTop:200}}>
      <Text></Text>
      <Text>First Name</Text>
              <TextInput 
              style = {styles.inputStyle}
              placeholder = "email"
              onChangeText = {(firstName) => setFirstName(firstName)}
              value = {firstName}
              />
          
          <Text>Last Name</Text>
              <TextInput 
              style = {styles.inputStyle}
              placeholder = "Password"
              onChangeText = {(lastName) => setLastName(lastName)}
              value = {lastName}
              />
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
    ({signupReducer}) => ({
      email: signupReducer.email,
      password: signupReducer.password,
      firstName: signupReducer.firstName,
      lastName: signupReducer.lastName,
    }),

     (dispatch, ownProps) => ({
      setFirstName: (firstName) => dispatch(actions.signup.SetFirstName(firstName)),
      setLastName: (lastName) => dispatch (actions.signup.SetLastName(lastName)),
      setEmail: (email) => dispatch(actions.signup.SetEmail(email)),
      setPassword: (password) => dispatch(actions.signup.SetPassword(password)),
      userSignUp: () => dispatch(actions.user.UserSignUp()),
      ...ownProps
    }),

  )(signUp)