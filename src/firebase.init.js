// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu1CeTyyqB9ho8iUgAu3Der2vuu5PaCPI",
  authDomain: "ema-john-simple-ab74b.firebaseapp.com",
  projectId: "ema-john-simple-ab74b",
  storageBucket: "ema-john-simple-ab74b.appspot.com",
  messagingSenderId: "1060398432705",
  appId: "1:1060398432705:web:bc509749af2625e6c86f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;