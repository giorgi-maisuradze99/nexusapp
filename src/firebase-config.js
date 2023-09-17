import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKoIlgY4JYgnsg70YQ6S1SUW7Jwv3Eoj4",
  authDomain: "fir-chatapp-3a728.firebaseapp.com",
  projectId: "fir-chatapp-3a728",
  storageBucket: "fir-chatapp-3a728.appspot.com",
  messagingSenderId: "374914877913",
  appId: "1:374914877913:web:19be1c526836bf5595f1c8",
  measurementId: "G-R1WS5X000Y",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
