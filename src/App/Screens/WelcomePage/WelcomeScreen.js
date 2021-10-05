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
  
    // let {fontFamily, error} = useFonts({
    //     BerkshireSwash_400Regular
    // })

    // const [loaded] = useFonts({
    //     Shrikhand: require('.\fonts\Shrikhand-Regular.ttf'),
    // });

    // if (!loaded) {
    //     return null;
    // }
}
       
onPressloginButton() {
    const { navigate } = this.props.navigation;
       navigate("Login")
}
onPressSignUpButton() {
    const { navigate } = this.props.navigation;
       navigate("SignUp")
}
   
  
render(){
    return (
       
        <View style={styles.background}>
        <Text style={styles.title}>
            Cliq'd
        </Text>
                 <TouchableOpacity onPress = {this.onPressloginButton}
            style={styles.loginContainter}>
            <Text style={styles.loginText}>
                Login
            </Text>
        </TouchableOpacity>
      
    
        <TouchableOpacity onPress = {this.onPressSignUpButton}
            style={styles.signupContainter}>
            <Text style={styles.signupText}>
                Sign Up
            </Text>
        </TouchableOpacity>
    </View>
   
    )
}
}
export default WelcomeScreen 
