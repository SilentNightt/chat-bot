import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSQNviykhlHIro7V6A19dfovYwZ4Fm3e4",
  authDomain: "chat-c92ed.firebaseapp.com",
  projectId: "chat-c92ed",
  storageBucket: "chat-c92ed.appspot.com",
  messagingSenderId: "1078173421634",
  appId: "1:1078173421634:web:b0196bead1625342185ddb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
