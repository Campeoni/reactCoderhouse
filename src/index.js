import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNdlT87MD-OnAMiFDTI92s9Oju7RXXok",
  authDomain: "gleaming-vision-333623.firebaseapp.com",
  projectId: "gleaming-vision-333623",
  storageBucket: "gleaming-vision-333623.appspot.com",
  messagingSenderId: "1082788833896",
  appId: "1:1082788833896:web:a91b751b2a5881f60269dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


