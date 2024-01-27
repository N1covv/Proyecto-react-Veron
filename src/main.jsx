import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrIUXJ5aM6tqDFZsqKrIPOsoRb_0ojBck",
  authDomain: "shadycommerce-8be86.firebaseapp.com",
  projectId: "shadycommerce-8be86",
  storageBucket: "shadycommerce-8be86.appspot.com",
  messagingSenderId: "30903217353",
  appId: "1:30903217353:web:f535ce498b59b0656bb118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>

    <App />

  </ChakraProvider>


)