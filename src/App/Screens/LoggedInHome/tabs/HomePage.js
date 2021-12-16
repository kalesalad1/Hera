import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button } from 'react-native';
import { connect, actions } from '@hera/ares'

const HomePage = ({ 
  
  navigation ,
  currentUser,

}) =>  {


  console.log({currentUser})
    return (

    
      <View style={styles.toolBarIcons}>

       
        <Text>Home!</Text>
      </View>
    );
  }

  export default connect(
    ({userReducer}) => ({
      currentUser: userReducer.currentUser,
    }),

     (dispatch, ownProps) => ({
   
      ...ownProps
    }),
  )(HomePage)