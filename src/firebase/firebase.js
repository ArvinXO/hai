// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5LPIhYilVoHu8jFVIzFWxu-5cNjf-uvI",
  authDomain: "hai-ai-ef50c.firebaseapp.com",
  projectId: "hai-ai-ef50c",
  storageBucket: "hai-ai-ef50c.appspot.com",
  messagingSenderId: "331385985503",
  appId: "1:331385985503:web:382b6f16a668b5a8cacc6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
