// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrwD_9LBKju4XTI37nR4bY_0nbOPs4lm0",
  authDomain: "chat-a7ca5.firebaseapp.com",
  projectId: "chat-a7ca5",
  storageBucket: "chat-a7ca5.appspot.com",
  messagingSenderId: "128338058013",
  appId: "1:128338058013:web:2a9b4061bc5740fab1dff4",
  measurementId: "G-XEV2ZQ8BNM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()