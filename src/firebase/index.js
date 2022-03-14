// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHSq7iZHwfwnQyehwWy9xqUfUppyjn4_Y",
  authDomain: "testproject-42fdf.firebaseapp.com",
  projectId: "testproject-42fdf",
  storageBucket: "testproject-42fdf.appspot.com",
  messagingSenderId: "26338117558",
  appId: "1:26338117558:web:3a5d1efeed66ebf56d2317",
  measurementId: "G-R9XEE9NCPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }