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
  apiKey: "AIzaSyCiABP5Mrfh8wEI3X-CM6iBXtoZIT3MKb0",
  authDomain: "hera-29e19.firebaseapp.com",
  projectId: "hera-29e19",
  storageBucket: "hera-29e19.appspot.com",
  messagingSenderId: "1062712053445",
  appId: "1:1062712053445:web:4cf45e0184227c6b146aac",
  measurementId: "G-5X1BY57QLE"
}

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
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