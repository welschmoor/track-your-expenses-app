import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZ_6BUHmLLDIoXKe-tjLNapoVjP2CpJa8",
  authDomain: "expense-tracker-c6eb2.firebaseapp.com",
  projectId: "expense-tracker-c6eb2",
  storageBucket: "expense-tracker-c6eb2.appspot.com",
  messagingSenderId: "590697718787",
  appId: "1:590697718787:web:c11bae2be0bfd1964e5a3 6"
};

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const firebaseAuth = firebase.auth()

// this returns a function timestamp() which returns Date
const timestamp = firebase.firestore.Timestamp

export { firestore, firebaseAuth, timestamp }