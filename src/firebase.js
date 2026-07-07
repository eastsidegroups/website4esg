import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTm6XcyGlWeTcwYx9MEWfuu1ZrCTJnY2g",
  authDomain: "website4esg.firebaseapp.com",
  projectId: "website4esg",
  storageBucket: "website4esg.firebasestorage.app",
  messagingSenderId: "232136608712",
  appId: "1:232136608712:web:370e1709836bb1b30a8efd",
  measurementId: "G-T2MRSGJV7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
