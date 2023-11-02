import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaE_8Pb0yUuOdbWfyuDj10Bjwn5VOB3gs",
  authDomain: "attendese231-m.firebaseapp.com",
  projectId: "attendese231-m",
  storageBucket: "attendese231-m.appspot.com",
  messagingSenderId: "775024373779",
  appId: "1:775024373779:web:a598388cb325bf90fe8fe6",
  measurementId: "G-58TK76693P"
};

firebase.initializeApp(firebaseConfig);

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to store the error message

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Reset the error message
    setError(null);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in as:', user.email);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error('Sign-in error:', error.message);
        setError('Invalid email or password. Please try again.');
      });
  };

  return (
    <div className="Signin">
      <div className="content">
        <div className="text">Sign In</div>
        <form action="#">
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <Link className="loginLink" to="/mainpage">
            <button className="buttonLogin" onClick={handleSignIn}>
              Sign In
            </button>
          </Link>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
