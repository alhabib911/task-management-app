// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtwBMUEwe1ov_z_32RMIqSBP7rgsRH2c",
  authDomain: "task-managment-app-4d9a3.firebaseapp.com",
  projectId: "task-managment-app-4d9a3",
  storageBucket: "task-managment-app-4d9a3.appspot.com",
  messagingSenderId: "886183269599",
  appId: "1:886183269599:web:7aaff30604523611a5856a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)
export default auth;