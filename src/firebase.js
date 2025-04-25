// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClBA1_h7NiOhK6a3uh4gSuUGZmbCm1iCA",
  authDomain: "heerach-495f1.firebaseapp.com",
  projectId: "heerach-495f1",
  storageBucket: "heerach-495f1.firebasestorage.app",
  messagingSenderId: "933639217329",
  appId: "1:933639217329:web:b8b17fded3fc7ca8238290",
  measurementId: "G-M8TTNGJNFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Export Firebase services
export { auth, firestore, storage, analytics };*/
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyClBA1_h7NiOhK6a3uh4gSuUGZmbCm1iCA",
  authDomain: "heerach-495f1.firebaseapp.com",
  projectId: "heerach-495f1",
  storageBucket: "heerach-495f1.firebasestorage.app",
  messagingSenderId: "933639217329",
  appId: "1:933639217329:web:b8b17fded3fc7ca8238290",
  measurementId: "G-M8TTNGJNFB"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
