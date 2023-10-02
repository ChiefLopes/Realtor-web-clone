// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwi5roUPg5rUhPHhIn7d7CnOynOmGCNXE",
  authDomain: "realtor-clone-4aa96.firebaseapp.com",
  projectId: "realtor-clone-4aa96",
  storageBucket: "realtor-clone-4aa96.appspot.com",
  messagingSenderId: "854673995347",
  appId: "1:854673995347:web:fb8dfccf03d3fc61fb38a6",
  measurementId: "G-8H1ZD0EVC2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
