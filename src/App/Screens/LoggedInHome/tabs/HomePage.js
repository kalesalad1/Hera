import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button } from 'react-native'
import { connect, actions } from '@hera/ares'
import CreateNewMedModal from './features/CreateNewMedModal'
import { medicationsReducer } from '@hera/ares/dist/App/api.reducers';

const HomePage = ({ 
  navigation ,
  currentUser,
  medications,
}) =>  {

  console.log({currentUser})
  const [isCreateNewMedModalVisible, setCreateNewMedModalVisible] = React.useState(false)


    return (
    
      <View style={styles.toolBarIcons}>
        <Text>{`Welcome! ${currentUser.firstname} ${currentUser.lastname}`}</Text>
        {medications.length > 0 && 
        medications.map(medication => {
          <View style = {{borderWidth:1, borderColor:'black', borderRadius:5}}>
            <Text>{medication.name}</Text>
            <Text>{medication.takeFrequency}</Text>
            <Text>{medication.atTimesToTake}</Text>
          </View>
        })
        }
        <Button title="Add a new medication" onPress={() => {setCreateNewMedModalVisible(true)}}/>
           <CreateNewMedModal
      isCreateNewMedModalVisible = {isCreateNewMedModalVisible}
      setCreateNewMedModalVisible = {setCreateNewMedModalVisible}
      ></CreateNewMedModal>
      </View>
      
   

    );
  }

  export default connect(
    ({userReducer, medicationsReducer}) => ({
      currentUser: userReducer.currentUser,
      medications: medicationsReducer.medications
    }),

     (dispatch, ownProps) => ({
   
      ...ownProps
    }),
  )(HomePage)