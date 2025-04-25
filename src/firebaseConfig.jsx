// firebaseConfig.jsx
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage'; // Required for file uploads

const firebaseConfig = {
  apiKey: "AIzaSyClBA1_h7NiOhK6a3uh4gSuUGZmbCm1iCA",
  authDomain: "heerach-495f1.firebaseapp.com",
  projectId: "heerach-495f1",
  storageBucket: "heerach-495f1.firebasestorage.app",
  messagingSenderId: "933639217329",
  appId: "1:933639217329:web:b8b17fded3fc7ca8238290",
  measurementId: "G-M8TTNGJNFB"
};

// Initialize Firebase app only once
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Export auth, storage, and firebase core
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage, firebase };
