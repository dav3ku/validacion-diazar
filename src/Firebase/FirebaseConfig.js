import { initializeApp } from "firebase/app";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
const db = getFirestore(app);
const storage = getStorage(app);

export default { db, storage };
