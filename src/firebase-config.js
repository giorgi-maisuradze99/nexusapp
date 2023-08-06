import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQjsHiS8ID0PvsvMOHuG6sACBJ1TyCrEc",
  authDomain: "nexusapp-e9498.firebaseapp.com",
  projectId: "nexusapp-e9498",
  storageBucket: "nexusapp-e9498.appspot.com",
  messagingSenderId: "429259516696",
  appId: "1:429259516696:web:b0de131bf8d19f42df4c6d",
  measurementId: "G-T4WGYZEL41",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
