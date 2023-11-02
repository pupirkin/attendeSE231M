// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaE_8Pb0yUuOdbWfyuDj10Bjwn5VOB3gs",
  authDomain: "attendese231-m.firebaseapp.com",
  projectId: "attendese231-m",
  storageBucket: "attendese231-m.appspot.com",
  messagingSenderId: "775024373779",
  appId: "1:775024373779:web:a598388cb325bf90fe8fe6",
  measurementId: "G-58TK76693P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth();
signInWithCustomToken(auth, token)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

    
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

