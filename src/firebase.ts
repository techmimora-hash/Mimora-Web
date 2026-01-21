// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk9ased_6xpH_0deQYcFl2QJ2sh-Xm3wE",
  authDomain: "mimora-a67d1.firebaseapp.com",
  projectId: "mimora-a67d1",
  storageBucket: "mimora-a67d1.firebasestorage.app",
  messagingSenderId: "254968409461",
  appId: "1:254968409461:web:0929d630c05b6c767a773c",
  measurementId: "G-5PYPF5BGVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);