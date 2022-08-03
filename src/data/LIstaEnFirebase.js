// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNLDWbMHPm4XDqPejUOgPhuqgHqjPncpI",
  authDomain: "react-piottimotor.firebaseapp.com",
  projectId: "react-piottimotor",
  storageBucket: "react-piottimotor.appspot.com",
  messagingSenderId: "610398215194",
  appId: "1:610398215194:web:a1740a4215fdcdcaabc5a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
