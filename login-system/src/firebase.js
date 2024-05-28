// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYLkoOiDQfOIu4WtLPeFLost3n8pAaSyE",
  authDomain: "synopsis-test-5e213.firebaseapp.com",
  projectId: "synopsis-test-5e213",
  storageBucket: "synopsis-test-5e213.appspot.com",
  messagingSenderId: "230843943937",
  appId: "1:230843943937:web:bc6c5e0706a969a8da4400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;