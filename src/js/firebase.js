// Import the necessary functions from the Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3UhG33uPFIWON5F9mOMjIHU4hIjWsqB8",
  authDomain: "my-ecommerce-website-7ef5a.firebaseapp.com",
  projectId: "my-ecommerce-website-7ef5a",
  storageBucket: "my-ecommerce-website-7ef5a.appspot.com",
  messagingSenderId: "313068374381",
  appId: "1:313068374381:web:f8e62a31fa4ace4d993264"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export the auth object and functions you need
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
