import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';

// --------------------------------------------------------------------------------------------------------------------

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDU9ud4Y94YZUXhWYEgxwQW984PzmYNSKA",
  authDomain: "react-firebase-auth-c345d.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-c345d.firebaseio.com",
  projectId: "react-firebase-auth-c345d",
  storageBucket: "react-firebase-auth-c345d.appspot.com",
  messagingSenderId: "868637411565",
  appId: "1:868637411565:web:e1c7fb57d0833cc263e4e4"
});

// --------------------------------------------------------------------------------------------------------------------

export const databaseFirebase = firebase.database().ref('medicines_denys');

// export const databaseCollection = firebase.firestore().collection('MedicineList');

// --------------------------------------------------------------------------------------------------------------------

export const signOut = () => app.auth().signOut();

// --------------------------------------------------------------------------------------------------------------------


export default {
  app,
  databaseFirebase,
  signOut,
  // databaseCollection,
};

