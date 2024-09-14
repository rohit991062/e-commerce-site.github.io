// auth-status.js
import { auth } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const authButtons = document.getElementById('auth-buttons');
  const profileMenu = document.getElementById('profile-menu');
  const signOutBtn = document.getElementById('sign-out-btn');

  // Initialize the authentication state on page load
  function updateUI() {
    auth.onAuthStateChanged(user => {
      if (user) {
        authButtons.style.display = 'none';
        profileMenu.style.display = 'flex';
      } else {
        authButtons.style.display = 'flex';
        profileMenu.style.display = 'none';
      }
    });
  }

  updateUI();

  // Add event listener for the sign-out button
  if (signOutBtn) {
    signOutBtn.addEventListener('click', async (e) => {
      e.preventDefault(); // Prevent the default anchor behavior
      try {
        await auth.signOut();
        updateUI(); // Update UI after signing out
        window.location.href = 'login.html'; // Redirect to login page
      } catch (error) {
        alert(error.message);
      }
    });
  } else {
    console.error('Sign Out Button not found!');
  }
});
