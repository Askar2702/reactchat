import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDamDFZAdqX75rV_Gg-XDf3WCzEerozZ2Y",
  authDomain: "chat-react-8aee0.firebaseapp.com",
  projectId: "chat-react-8aee0",
  storageBucket: "chat-react-8aee0.appspot.com",
  messagingSenderId: "428367553255",
  appId: "1:428367553255:web:2833e36c0f050a38b5b842",
  measurementId: "G-88RX6V9CK5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter >
    <Context.Provider value={{ auth, firestore }}> <App /></Context.Provider>
  </BrowserRouter >
);

