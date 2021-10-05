import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput} from "react-native";

const NewActScreen = () => {
    const [text, setText] = useState('');
    
    return (
    <View>
       
        <Text style={styles.textStyle}>FirstName</Text>
        <TextInput style={styles.inputStyle} placeholder="FirstName" onChangeText={text => setText(text)} defaultValue={text}/>
        <Text style={styles.textStyle}>Lastname</Text>
        <TextInput style={styles.inputStyle} placeholder="LastName" onChangeText={text => setText(text)} defaultValue={text}/>
        <Text style={styles.textStyle}>Age</Text>
        <TextInput style={styles.inputStyle} placeholder="Age" onChangeText={text => setText(text)} defaultValue={text}/>
        <Text style={styles.textStyle}>Description</Text>
        <TextInput style={styles.inputStyle} placeholder="Description" onChangeText={text => setText(text)} defaultValue={text}/>
        <Text style={styles.textStyle}>Images</Text>
        <TextInput style={styles.inputStyle} placeholder="ImagesPaceholder" onChangeText={text => setText(text)} defaultValue={text}/>
        
    </View>
    );
};

const styles = StyleSheet.create({
 
    textStyle: {
        fontSize: 30,
        
    },
    inputStyle: {
        height: 30,
      
    }
});

export default NewActScreen;