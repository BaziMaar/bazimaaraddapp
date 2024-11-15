// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0-jHdoRncHxp0ouP8auI4S1gMOjnAGRA",
  authDomain: "colortradinghack.firebaseapp.com",
  projectId: "colortradinghack",
  storageBucket: "colortradinghack.firebasestorage.app",
  messagingSenderId: "1097498803921",
  appId: "1:1097498803921:web:2014a433ae587435efcff0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore(app);
export default app;
