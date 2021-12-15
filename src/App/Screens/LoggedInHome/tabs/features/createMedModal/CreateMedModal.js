import React, { useState, useEffect } from "react"
import { connect, actions } from '@hera/ares'
import { View, Text,  TextInput, TouchableOpacity ,StyleSheet, Modal} from "react-native";
import styles from '../../../../Styles/styles.js'
import {MaterialIcons} from '@expo/vector-icons'

const CreateMedModal = ({
  logUserIn,
  setMedication,
  setTime,
  medication,
  time,
  currentUser,
  myUser
}) => {
  console.log({data:currentUser, type: typeof currentUser})
  
  const validate = () => {
    logUserIn()
  }
  const [modalVisible, setModalVisible] = useState(false);



  return(     
    <View>
      <Modal 
        visible={modalVisible}
        animationType="slide"
        >
          <MaterialIcons
            name='close'
            size={24}
            style={styles.modalClose}
            onPress={() => setModalVisible(false)}
          />
      
      <View style={styles.modalForm}>
      <Text style = {styles.newReminderTitle}>New Reminder</Text>
      
          <Text>Medication</Text>
              <TextInput 
                  style = {styles.inputStyle}
                  placeholder = "Medication"
                  onChangeText = {(medication) => setMedication(medication)}
                  value = {medication}
                  />
              <Text>Time</Text>
              <TextInput 
                  style = {styles.inputStyle}
                  placeholder = "Time"
                  onChangeText = {(time) => setTime(time)}
                  value = {time}
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
          </Modal>

          <MaterialIcons
            name='add'
            size={24}
            style={styles.modalToggle}
            onPress={() => setModalVisible(true)}
          />
      
      </View>
      )
      
  

}


export default connect(
    ({loginReducer, userReducer}) => ({
      email: loginReducer.email,
      password: loginReducer.password,
      currentUser: userReducer.currentUser,
    }),

     (dispatch, ownProps) => ({
      setEmail: (medication) => dispatch(actions.login.SetEmail(medication)),
      setPassword: (time) => dispatch(actions.login.SetPassword(time)),
      logUserIn: () => dispatch(actions.user.LogUserIn()),
      ...ownProps
    }),

  )(CreateMedModal)