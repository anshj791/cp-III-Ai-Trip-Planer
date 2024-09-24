// Import the functions you need from the SDKs you need
import { initializeApp ,getReactNativePersistence } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2klfuLsM7a2SzOnhIOly4JAbaS1NWxEE",
  authDomain: "cp-iii-ai-trip-planer.firebaseapp.com",
  projectId: "cp-iii-ai-trip-planer",
  storageBucket: "cp-iii-ai-trip-planer.appspot.com",
  messagingSenderId: "58417660987",
  appId: "1:58417660987:web:f66d80abc06a7b1560881e",
  measurementId: "G-M6YLGGN51G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
