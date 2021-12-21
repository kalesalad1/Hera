import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button, Image} from 'react-native';
import { connect, actions } from '@hera/ares'

//<Text style={styles.heading3}>Profile</Text>
//<Text>Profile</Text>

//Pill bottle image by © 2021 Jack Watson

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

        <Text style={styles.heading4}>Hi There!</Text>

        <View style = {{paddingTop:100}}>
        </View>

        <View>
        <Image
              style={styles.infoBox}
              source={require('../../../../../assets/pill_bottle_Nov2018.png')}
        />
        </View>

        <View style = {{paddingTop:100}}>
        </View>

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