import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: env.process()
  authDomain: "tidbits-2d0a6.firebaseapp.com",
  projectId: "tidbits-2d0a6",
  storageBucket: "tidbits-2d0a6.appspot.com",
  messagingSenderId: "50306830546",
  appId: "1:50306830546:web:1c0b6ccd0ce18d4863dd0b",
  measurementId: "G-5QEECV8E15"
};

// Initialize Firebase
// if(!firebase.app){
    firebase.initializeApp(firebaseConfig);
// }

export const auth = firebase.auth();
export const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
