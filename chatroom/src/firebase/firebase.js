import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
    // put Firebase cred to connect to Firebase to App
});

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {auth, db, provider};