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
      <View style = {{paddingTop:150}}>
      <Text style={styles.heading2}>Create your Account</Text>

      <Text></Text>
      <Text style={styles.nameText}>FIRST NAME</Text>
              <TextInput 
              style = {styles.inputStyle1}
              placeholder = "     Name"
              onChangeText = {(firstName) => setFirstName(firstName)}
              value = {firstName}
              />
          
          <Text style={styles.nameText}>LAST NAME</Text>
              <TextInput 
              style = {styles.inputStyle1}
              placeholder = "     Last Name"
              onChangeText = {(lastName) => setLastName(lastName)}
              value = {lastName}
              />
          <Text style={styles.emailText}>EMAIL</Text>
              <TextInput 
              style = {styles.inputStyle1}
              placeholder = "     Email"
              onChangeText = {(email) => setEmail(email)}
              value = {email}
              />
          
          <Text style={styles.passText}>PASSWORD</Text>
          <TextInput 
              style = {styles.inputStyle1}
              placeholder = "     Password"
              onChangeText = {(password) => setPassword(password)}
              value = {password}
              />
          <TouchableOpacity 
          onPress={() => {
            validate()
         
          }}
          style={styles.signupContainter1}>
                  <Text style={styles.signupText}>
                      SIGN UP
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