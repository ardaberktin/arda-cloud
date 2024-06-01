import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8wJC27IvUV8hW1z4j-jG7Ve2D5eTy_o0",
  authDomain: "arda-cloud.firebaseapp.com",
  projectId: "arda-cloud",
  storageBucket: "arda-cloud.appspot.com",
  messagingSenderId: "672882904106",
  appId: "1:672882904106:web:6a54778efe3abeb078c753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* ---------------------------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
