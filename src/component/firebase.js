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
  apiKey: "AIzaSyCaM9FqoJ66IAljaAusQ1YQqlYXXkyTlgg",
  authDomain: "colortrading-30bb3.firebaseapp.com",
  projectId: "colortrading-30bb3",
  storageBucket: "colortrading-30bb3.firebasestorage.app",
  messagingSenderId: "384914521084",
  appId: "1:384914521084:web:f43520a88a024def4cd079"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore(app);
export default app;
