import React, { useState } from 'react';
import './signin.css';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // ...your Firebase config
};

firebase.initializeApp(firebaseConfig);

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory(); // For programmatic navigation

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    setError(null);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in as:', user.email);

        // Check if the user's email is allowed
        if (user.email === '38516@iitu.edu.kz') {
          history.push('/mainpage'); // Navigate to mainpage.jsx
        } else {
          setError('Access restricted for this email address.');
        }
      })
      .catch((error) => {
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
          <button className="buttonLogin" onClick={handleSignIn}>
            Sign In
          </button>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
