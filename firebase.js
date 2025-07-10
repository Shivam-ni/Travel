// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPUyVuwHOWrNuq29b15qry37kapC5e0X8",
  authDomain: "travel-website-64928.firebaseapp.com",
  projectId: "travel-website-64928",
  storageBucket: "travel-website-64928.firebasestorage.app",
  messagingSenderId: "792880201584",
  appId: "1:792880201584:web:fc37f9edf8e5a59c0699b5",
  measurementId: "G-H18ELFJRT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 