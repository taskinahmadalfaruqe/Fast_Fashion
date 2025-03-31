// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhx6VVQKM3S0SOMxZXUeMCG-jdd0Qk14w",
  authDomain: "fast-fashion-cb5bd.firebaseapp.com",
  projectId: "fast-fashion-cb5bd",
  storageBucket: "fast-fashion-cb5bd.firebasestorage.app",
  messagingSenderId: "774806767594",
  appId: "1:774806767594:web:2814dabf546d94ee1cd493",
  measurementId: "G-WEFC077348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);