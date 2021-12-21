import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button } from 'react-native';
import { connect, actions } from '@hera/ares'

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

        <Text style={styles.heading3}>Profile</Text>

        <Button
          onPress={() => LogoutUser()}
          title="Logout"
          color="#023E8A"
        />
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