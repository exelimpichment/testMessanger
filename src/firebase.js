import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhIURStPlsz_7qk_0tz4pCzo8BimTV5ZI",
  authDomain: "reactchat-b7d57.firebaseapp.com",
  projectId: "reactchat-b7d57",
  storageBucket: "reactchat-b7d57.appspot.com",
  messagingSenderId: "109952046256",
  appId: "1:109952046256:web:c48cfec0c88a5c0f815775",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
