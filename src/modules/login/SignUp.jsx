import React, { useState } from 'react';
import './signup.css';
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

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to store the error message

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Reset the error message
    setError(null);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed up as:', user.email);
      })
      .catch((error) => {
        // Handle sign-up error
        console.error('Sign-up error:', error.message);

        // Check for email already in use error
        if (error.code === 'auth/email-already-in-use') {
          setError('Email is already in use. Please sign in or reset your password.');
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="Signup">
      <div></div>
      <div className="content">
        <div className="text">Sign Up</div>
        <form id="form" action="" method="post" encType="multipart/form-data">
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              name="firstname"
              placeholder="First name"
            />
          </div>
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              name="lastname"
              placeholder="Last name"
            />
          </div>
          <div className="field">
            <input
              required=""
              type="text"
              className="input"
              name="email"
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
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button className="buttonLogin" onClick={handleSignUp}>
            Sign Up
          </button>
          <div className="login">
            Already have an account? <Link to="/signin">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
