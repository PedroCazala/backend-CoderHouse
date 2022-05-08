
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMgESwzU2xjwQDSC4fU3_avtBWjX5UjWI",
  authDomain: "proyectofinal-backend-coder.firebaseapp.com",
  projectId: "proyectofinal-backend-coder",
  storageBucket: "proyectofinal-backend-coder.appspot.com",
  messagingSenderId: "442146760561",
  appId: "1:442146760561:web:8526712910786740fe38d0",
  measurementId: "G-RRGHKXGF8T"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()
initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://proyectofinal-backend-coder.firebaseio.com'
});
initializeApp();

const db = getFirestore();
export {db}
