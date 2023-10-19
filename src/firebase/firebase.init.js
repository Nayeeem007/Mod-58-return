// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMoDXMzJ5UfhYmg9cQGUXGAKFYTTHX324",
  authDomain: "simple-firebase-return.firebaseapp.com",
  projectId: "simple-firebase-return",
  storageBucket: "simple-firebase-return.appspot.com",
  messagingSenderId: "631176636290",
  appId: "1:631176636290:web:8395fd0c0edc4ba2ba519b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;