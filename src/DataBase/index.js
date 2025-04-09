import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX5vfnklwcL6PMbUXlI5pvJT0uBipKz_I",
  authDomain: "portifole-f00d2.firebaseapp.com",
  projectId: "portifole-f00d2",
  storageBucket: "portifole-f00d2.firebasestorage.app",
  messagingSenderId: "976612086375",
  appId: "1:976612086375:web:b0b614a850aa65180dbac2",
  measurementId: "G-85MSLH8RYR",
};

const firebaseApp = initializeApp(firebaseConfig);

export const Db = getFirestore(firebaseApp);
