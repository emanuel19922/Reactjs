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
  apiKey: "AIzaSyAmiUuoONTdnFe-eL8Ni3fDJsKmxAnVXHE",
  authDomain: "products-d8120.firebaseapp.com",
  projectId: "products-d8120",
  storageBucket: "products-d8120.appspot.com",
  messagingSenderId: "1058881016231",
  appId: "1:1058881016231:web:67967a43a5e7851f4b2682",
  measurementId: "G-2YKZKP5SZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <App />
 
);

