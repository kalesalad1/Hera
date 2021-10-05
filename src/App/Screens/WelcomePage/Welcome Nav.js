import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import styles from '../Styles/styles.js'
// import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) =>{
    // let {fontFamily, error} = useFonts({
    //     BerkshireSwash_400Regular
    // })

    // const [loaded] = useFonts({
    //     Shrikhand: require('.\fonts\Shrikhand-Regular.ttf'),
    // });

    // if (!loaded) {
    //     return null;
    // }

    return (
        <View style={styles.background}>
            <Text style={styles.title}>
                Cliq'd
            </Text>
            <Image 
                source={require('../../../assets/Images/BackgroundImage.png')}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login',{
                itemId: 99
                })} 
                style={styles.loginContainter}>
                <Text style={styles.loginText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen;