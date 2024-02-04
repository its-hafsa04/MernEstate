// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4d183.firebaseapp.com",
  projectId: "mern-estate-4d183",
  storageBucket: "mern-estate-4d183.appspot.com",
  messagingSenderId: "146793924454",
  appId: "1:146793924454:web:cd382fa19cf83dfb502aa7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);