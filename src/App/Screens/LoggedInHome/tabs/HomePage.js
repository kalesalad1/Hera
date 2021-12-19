import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Button } from 'react-native'
import { connect, actions } from '@hera/ares'
import CreateNewMedModal from './features/CreateNewMedModal'
import ViewMedModal from './features/ViewMedModal'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

const HomePage = ({ 
  navigation ,
  currentUser,
  medications,
  setSelectedMed,
  GetMedications,
}) =>  {

  React.useEffect(()=>{
    GetMedications()
  },[])
  const [isCreateNewMedModalVisible, setCreateNewMedModalVisible] = React.useState(false)
  const [isViewModalVisible, setViewModalVisible] = React.useState(false)
  
  const handleView = (medication) => {
    setSelectedMed(medication)
    setViewModalVisible(true)
  }
    return (
    
      <View style={styles.toolBarIcons}>
        <ScrollView>
        <Text>{`Welcome! ${currentUser.firstname}`}</Text>
        {!!medications && medications.length>0 && (
          <View>
        {medications.map((medication,i) => (
         <TouchableHighlight 
         style = {{alignSelf:'center',borderWidth:1, borderColor:'black', borderRadius:5, width:'80%'}}
         onPress = {()=> handleView(medications[i]) }>
         <View >
            <Text>{medications[i].name}</Text>
            <Text>{medications[i].takeFrequency}</Text>
            <Text>{medications[i].atTimesToTake}</Text>
          </View>
          </TouchableHighlight>
        ))}
        </View>
        )}
        <Button title="Add a new medication" onPress={() => {setCreateNewMedModalVisible(true)}}/>
        </ScrollView>
     
      <CreateNewMedModal
      isCreateNewMedModalVisible = {isCreateNewMedModalVisible}
      setCreateNewMedModalVisible = {setCreateNewMedModalVisible}
      ></CreateNewMedModal>

    <ViewMedModal
      isViewModalVisible = {isViewModalVisible}
      setViewModalVisible = {setViewModalVisible}
      ></ViewMedModal>


      </View>
      
   

    );
  }

  export default connect(
    ({userReducer, medicationsReducer}) => ({
      currentUser: userReducer.currentUser,
      medications: medicationsReducer.medications
    }),

     (dispatch, ownProps) => ({
      setSelectedMed: (medication) => dispatch(actions.medications.SetSelectedMed(medication)),
      GetMedications: () => dispatch (actions.medications.GetMedications()),
      ...ownProps,
    }),
  )(HomePage)