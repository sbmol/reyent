// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2JBf6oha69pkhcicJtUskZ9BpQSe9bmo",
  authDomain: "reyentwebapp.firebaseapp.com",
  projectId: "reyentwebapp",
  storageBucket: "reyentwebapp.appspot.com",
  messagingSenderId: "1084052447136",
  appId: "1:1084052447136:web:3fdcaad504401252ea8ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.signInWithEmailAndPassword('user@example.com', 'password')
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
const db = getFirestore(app);

export { auth, db, app }