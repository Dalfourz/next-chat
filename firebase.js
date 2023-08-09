// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgHHk2YpjHHOQrCGAYHE764sQDiNWe3-c",
    authDomain: "next-chat-f3f45.firebaseapp.com",
    projectId: "next-chat-f3f45",
    storageBucket: "next-chat-f3f45.appspot.com",
    messagingSenderId: "895533042821",
    appId: "1:895533042821:web:c3e5a7aded6660ae6eadec"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default app
export { auth, db }