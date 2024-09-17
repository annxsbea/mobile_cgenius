// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmlJkrzJdX6rVxd54szhmPM-jRrxX3FkA",
    authDomain: "cgenius-mobile.firebaseapp.com",
    projectId: "cgenius-mobile",
    storageBucket: "cgenius-mobile.appspot.com",
    messagingSenderId: "424466155738",
    appId: "1:424466155738:web:cf9484515f929f336cfde3",
    measurementId: "G-4EG21HFET7"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const database = getFirestore(app);

  export { auth, database };