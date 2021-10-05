import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button } from 'react-native';
import { connect, actions } from '@cliqd/janet'

const Profile = ({ 
  
  navigation ,

  setEmail,
setPassword,
setCurrentUser,
}) =>  {

  const LogoutUser = () =>{
    setEmail(),
    setPassword(),
    setCurrentUser()

  }
    return (

    
      <View style={styles.toolBarIcons}>

        <Button
          onPress={() => LogoutUser()}
          title="Logout"
          color="#841584"
        />
        <Text>Profile!</Text>
      </View>
    );
  }

  export default connect(
    ({userReducer}) => ({
      currentUser: userReducer.currentUser,
    }),

     (dispatch, ownProps) => ({
      setEmail: () => dispatch(actions.login.SetEmail()),
      setPassword: () => dispatch(actions.login.SetPassword()),
      setCurrentUser: () => dispatch(actions.user.setCurrentUser()),
      ...ownProps
    }),
  )(Profile)