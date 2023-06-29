import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp3Ku_X_5joPs4pNMTQdmS9GxqHq-qVEg",
  authDomain: "productosdatabase.firebaseapp.com",
  projectId: "productosdatabase",
  storageBucket: "productosdatabase.appspot.com",
  messagingSenderId: "829211620202",
  appId: "1:829211620202:web:ea961caaf8e6bb1e19eb13",
  measurementId: "G-BG7EWMMZ26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

