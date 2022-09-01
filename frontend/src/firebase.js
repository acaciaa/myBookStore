// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_MpM5lm4TWqqaQzgU4ikMirQRAEKgoKw",
  authDomain: "bookstore-acdd2.firebaseapp.com",
  projectId: "bookstore-acdd2",
  storageBucket: "bookstore-acdd2.appspot.com",
  messagingSenderId: "272532060615",
  appId: "1:272532060615:web:9130836c82765c4e9d41e2",
  measurementId: "G-QDZDJ6WPCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };