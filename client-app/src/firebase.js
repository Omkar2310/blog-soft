// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-omkar.firebaseapp.com",
  projectId: "blog-omkar",
  storageBucket: "blog-omkar.appspot.com",
  messagingSenderId: "975911087547",
  appId: "1:975911087547:web:9c262120d46c80e96ee89e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
