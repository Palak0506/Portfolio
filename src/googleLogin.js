// googleLogin.js
import React, { useState } from 'react';
import firebase from './firebase'; // Import the Firebase configuration
import './GoogleLogin.css'; // Import your CSS file for styling

function GoogleLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful login
        const loggedInUser = result.user;
        setUser(loggedInUser);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      // User is now signed out.
      setIsLoggedIn(false);
      setUser(null);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="google-login">
      {!isLoggedIn ? (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default GoogleLogin;
