// https://console.firebase.google.com/project/project-5---f3---24/database/project-5---f3---24-default-rtdb/data
// Click to ... to import JSON to Firebase
// npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhhXYdx0rFwWJJrejBAIl61JDZyiw4A8o",
  authDomain: "project-5---f3---24.firebaseapp.com",
  databaseURL: "https://project-5---f3---24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-5---f3---24",
  storageBucket: "project-5---f3---24.appspot.com",
  messagingSenderId: "170481833096",
  appId: "1:170481833096:web:95da75116654aa00e6fb3d",
  measurementId: "G-CV9QT4B6X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Import getDatabase from ...
const dbFirebase = getDatabase(app);
// Auth Firebase:
const authFirebase = getAuth(app);
// Export database
export {authFirebase, dbFirebase}