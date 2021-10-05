import React from 'react'
import * as firebase from 'firebase'; 

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSecureStore from '@neverdull-agency/expo-unlimited-secure-store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import { Provider as ReduxProvider } from 'react-redux'


import { getFirestore } from "redux-firestore"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';


import { reducers } from  '@cliqd/janet'

import Loading from './Loading'



export const fbConfig = {  
apiKey: "AIzaSyAS_v-QVi_3v84VFOnkF4nJ0-g0Ye4OwSk",
authDomain: "cliqd-19df5.firebaseapp.com",
databaseURL: "https://cliqd-19df5-default-rtdb.firebaseio.com",
projectId: "cliqd-19df5",
storageBucket: "cliqd-19df5.appspot.com",
messagingSenderId: "440529118050",
appId: "1:440529118050:web:1788a1ed3477f50664423b",
measurementId: "G-DB5HZKE6DP"}

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Store in Firestore instead of Real Time DB
}


const middlewares = [
thunk.withExtraArgument( getFirestore )
]


const store = createStore(
 
  persistReducer(
    {
      key: 'root',
      storage: createSecureStore(),
    },
    combineReducers(reducers)
  ),
  applyMiddleware(...middlewares),
    

)

const persistor = persistStore(store)

// Construct a Provider using our Store & Persistor
function ThunkSync({ children }) {
  if (!firebase.apps.length) {
    firebase.initializeApp(fbConfig);
    firebase.firestore();
 }else {
    firebase.app();
    firebase.firestore();
 // if already initialized, use that one
 }
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
         <ReactReduxFirebaseProvider
            firebase={firebase}
            config={rrfConfig}
            dispatch={store.dispatch}
            createFirestoreInstance={createFirestoreInstance}
          > 
              {children}
          </ReactReduxFirebaseProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default ThunkSync