// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUc-lELi_hM2tuTU-MB39SSISUa8z-aPc",
  authDomain: "reacttraining-9a791.firebaseapp.com",
  projectId: "reacttraining-9a791",
  storageBucket: "reacttraining-9a791.firebasestorage.app",
  messagingSenderId: "949827789519",
  appId: "1:949827789519:web:d9e49a866cf6a345fb4dba",
  measurementId: "G-W77ZM8FPMN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default { app, db };
