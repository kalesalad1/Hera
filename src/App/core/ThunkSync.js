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
  apiKey: "AIzaSyDpcwcJq1ymD-yiuoUMpWXaLoC4X3Isa80",
  authDomain: "cliqd-19df5.firebaseapp.com",
  authDomain: "hera-29dec.firebaseapp.com",
  projectId: "hera-29dec",
  storageBucket: "hera-29dec.appspot.com",
  messagingSenderId: "455834664223",
  appId: "1:455834664223:web:c4a95ee7ab8c769eb5442a",
  measurementId: "G-Q71CTN3CHR"
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