import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile
} from 'https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyA-6w3N7hCrMJ0BhCfeTCuoXMHRhbCkWzo",
  authDomain: "pulse-analytics-e80c0.firebaseapp.com",
  projectId: "pulse-analytics-e80c0",
  storageBucket: "pulse-analytics-e80c0.firebasestorage.app",
  messagingSenderId: "812054148128",
  appId: "1:812054148128:web:9232c89dd935982cc3f845"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export function signUpWithEmail(email, password, name) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(cred => updateProfile(cred.user, { displayName: name }).then(() => cred));
}

export function logInWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export function logOutUser() {
  return signOut(auth);
}

export function onAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

export function requireAuth() {
  onAuthStateChanged(auth, user => {
    if (!user) window.location.href = 'login.html';
  });
}

export function redirectIfLoggedIn() {
  onAuthStateChanged(auth, user => {
    if (user) window.location.href = 'dashboard.html';
  });
}
