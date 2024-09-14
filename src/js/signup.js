import { auth, createUserWithEmailAndPassword } from './firebase.js'; // Adjust the path if necessary

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful sign up
        console.log('User signed up:', userCredential.user);
        
        // Redirect to home page
        window.location.href = 'home.html'; // Change to the URL you want to redirect to
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error signing up:', error.code, error.message);
        alert('Failed to sign up: ' + error.message);
      });
  });
});
