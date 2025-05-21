// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2eeIqLskz_imEn1GhGiW6gIKFTP4_IrA",
  authDomain: "todo-app-e6268.firebaseapp.com",
  projectId: "todo-app-e6268",
  storageBucket: "todo-app-e6268.firebasestorage.app",
  messagingSenderId: "742501201753",
  appId: "1:742501201753:web:34a250e01d528a42473e48",
  measurementId: "G-70YPD1KYX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const db = getFirestore(app);
export const auth = getAuth(app);