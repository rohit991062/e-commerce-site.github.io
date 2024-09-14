import { auth, signInWithEmailAndPassword } from './firebase.js'; // Adjust the path if necessary

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful login
        console.log('User logged in:', userCredential.user);
        
        // Redirect to home page
        window.location.href = 'home.html'; // Change to the URL you want to redirect to
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Error logging in:', error.code, error.message);
        alert('Failed to log in: ' + error.message);
      });
  });
});
