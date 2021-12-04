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


import { reducers } from  '@hera/ares'

import Loading from './Loading'



export const fbConfig = {  
  apiKey: "AIzaSyC2f7eca_c7XnGFPf9sXjr7b30MttTtw8Q",
  authDomain: "hera-ba139.firebaseapp.com",
  projectId: "hera-ba139",
  storageBucket: "hera-ba139.appspot.com",
  messagingSenderId: "546466412881",
  appId: "1:546466412881:web:2de18695ef8161006bbb70",
  measurementId: "G-8XH68RG6MW"
}

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