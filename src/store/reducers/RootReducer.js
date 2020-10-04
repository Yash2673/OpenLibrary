import {combineReducers} from 'redux'
import { AuthReducer } from './AuthReducer'
import { BookReducer } from './BookReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

export const RootReducer = combineReducers({
    books : BookReducer,
    auth : AuthReducer,
    firestore: firestoreReducer,
    firebase : firebaseReducer
})