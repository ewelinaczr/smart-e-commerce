import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from 'firebase/database';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCM90ay6A4prlYCqR2t8OyfdsqeB6ZiigI",
  authDomain: "ecommerce-shop-40042.firebaseapp.com",
  projectId: "ecommerce-shop-40042",
  storageBucket: "ecommerce-shop-40042.appspot.com",
  messagingSenderId: "38615575515",
  appId: "1:38615575515:web:78aee4bc2907e793ba15fe",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
