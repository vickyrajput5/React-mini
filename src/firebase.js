
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA0JFrirha39iO225ncEm31xmOpwtheWC0",
    authDomain: "chat-ddc4e.firebaseapp.com",
    projectId: "chat-ddc4e",
    storageBucket: "chat-ddc4e.appspot.com",
    messagingSenderId: "218377224583",
    appId: "1:218377224583:web:948f160e27031f612a9322"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()