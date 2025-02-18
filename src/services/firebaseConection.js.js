import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const fireBaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(fireBaseApp);
export const auth = getAuth(fireBaseApp);
