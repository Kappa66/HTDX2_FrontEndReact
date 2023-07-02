// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqE8bXuuKbKh0v6_-YT7FI_cvJWZoaHAw",
  authDomain: "authentication-app-11573.firebaseapp.com",
  projectId: "authentication-app-11573",
  storageBucket: "authentication-app-11573.appspot.com",
  messagingSenderId: "83563844264",
  appId: "1:83563844264:web:db621b1e23c02f9d19e89d"
};

//Connect to Authentication
// getAuth() --> it is a function, that helps our React Application to connect to Authentication in Firebase

//Google Authentication
//GoogleAuthProvider --> It is a class that helps our React Application to connect to Google Auth in firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) //-->Authentication

export const provider = new GoogleAuthProvider() //--->Google Authentication

//We connected our React Application to Firebase Application

//Connect to Authentication --> Google Authentication