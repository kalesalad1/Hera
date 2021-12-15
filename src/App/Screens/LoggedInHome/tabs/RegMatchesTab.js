import * as React from 'react';
import styles from '../../Styles/styles.js'
import { Text, View, Modal, Alert, Pressable, useState } from 'react-native';
import CreateMedModal from './features/createMedModal'


const Matches = ({ navigation }) => {

    return (
          <View>
              <CreateMedModal></CreateMedModal>
          </View>
    );
  }

  export default Matches;