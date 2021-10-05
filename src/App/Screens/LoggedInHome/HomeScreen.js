import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Tabs from '../../Components/BottomTabs/Index'




const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default HomeScreen;