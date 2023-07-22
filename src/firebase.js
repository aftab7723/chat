// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"





const firebaseConfig = {
  apiKey: "AIzaSyC_5ToQVs73FoLJ6MXRVeAb_JX449hR0Sw",
  authDomain: "chat-393107.firebaseapp.com",
  projectId: "chat-393107",
  storageBucket: "chat-393107.appspot.com",
  messagingSenderId: "1095140419727",
  appId: "1:1095140419727:web:245c0d91b7c28e134a68fa"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();

 
 
 
