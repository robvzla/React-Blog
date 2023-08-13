import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZBV7zh5krGdsXe58qIM_5xBEYtCZEiRI",
  authDomain: "personal-blog-a40d3.firebaseapp.com",
  projectId: "personal-blog-a40d3",
  storageBucket: "personal-blog-a40d3.appspot.com",
  messagingSenderId: "48281036704",
  appId: "1:48281036704:web:2863d7ddf36f408862e6c5",
  measurementId: "G-9071KJVG5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
