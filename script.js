// Define the function
function togglePassword() {
  const passwordInput = document.getElementById('password');
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Expose it globally if using a module
window.togglePassword = togglePassword;


document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signupBtn = document.getElementById("signup-btn");

  function validateForm() {
    const emailValid = /\S+@\S+\.\S+/.test(emailInput.value);
    const passwordValid = passwordInput.value.length >= 8;

    signupBtn.disabled = !(emailValid && passwordValid);
  }

  emailInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);

  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
    alert("Form submitted successfully!");
    // You can replace this with real backend logic
  });
});
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Real-time validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const firebaseError = document.getElementById("firebase-error");

function validateForm() {
  let isValid = true;

  // Email validation
  if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  signupBtn.disabled = !isValid;
}

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Optional form handling
document.getElementById("signin-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // You can replace this alert with actual login logic
  alert(`Email: ${email}\nPassword: ${password}`);
});

// Form submission
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  firebaseError.textContent = "";

  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      // Redirect or clear form
    })
    .catch((error) => {
      firebaseError.textContent = error.message;
    });
});
document.querySelectorAll('.list-item').forEach(item => {
  item.addEventListener('click', () => {
    if (navigator.vibrate) {
      navigator.vibrate(20); // short vibration
    }
  });
});


// Cancel Trip Logic with animation
document.querySelectorAll('.cancel-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel this trip?')) {
      const card = btn.closest('.trip-card');
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => card.remove(), 500); // remove after animation
    }
  });
});
