import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, TextInput } from "react-native";
import styles from '../Styles/styles.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import { useFonts } from 'expo-font';

export class WelcomeScreen extends Component {
  constructor(props){
	  super(props);
      this.onPressloginButton = this.onPressloginButton.bind(this);
      this.onPressSignUpButton = this.onPressSignUpButton.bind(this);
  
  }
       
onPressloginButton() {
    const { navigate } = this.props.navigation;
       navigate("Login")
}
onPressSignUpButton() {
    const { navigate } = this.props.navigation;
       navigate("SignUp")
}
   
/*
<Text style={styles.title}>
            Hera
</Text>
*/
  
render(){
    return (
       
        <View style={styles.background}>
 
        <View style={styles.top}>
          <Text style={styles.subHeading}>
               Welcome to
          </Text>
          <Text style={styles.heading}>
            HERA
          </Text>
        </View>

        <TouchableOpacity onPress = {this.onPressloginButton}
            style={styles.loginContainter}>
            <Text style={styles.loginText}>
                LOGIN
            </Text>
        </TouchableOpacity>
      
    
        <TouchableOpacity onPress = {this.onPressSignUpButton}
            style={styles.signupContainter}>
            <Text style={styles.signupText}>
                SIGN UP
            </Text>
        </TouchableOpacity>
    </View>
   
    )
}
}
export default WelcomeScreen 
