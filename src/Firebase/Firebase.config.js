// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4cIBQQvcZonm9Tv6yMS63z8eXUe_vEL0",
  authDomain: "heritage-nest-bc7c5.firebaseapp.com",
  projectId: "heritage-nest-bc7c5",
  storageBucket: "heritage-nest-bc7c5.appspot.com",
  messagingSenderId: "489046215319",
  appId: "1:489046215319:web:63602ff03b4628244ff7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;