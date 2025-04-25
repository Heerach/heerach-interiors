// src/Auth.js
/*import React, { useState } from 'react';
import { auth } from './firebase'; // Import Firebase authentication service
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Registered Successfully');
    } catch (error) {
      alert('Error registering: ' + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      alert('Logged In Successfully');
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    alert('Logged Out');
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Ensure correct path for your firebase.js file

const AuthComponent = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Listen to auth state changes (sign-in or sign-out)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>{;
    setUser (user);
  });
  return () => unsubscribe();
 }, []);

  // Handle Sign In
  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in');
      })
      .catch((error) => {
        console.error('Sign-in error:', error.message);
      });
  };

  // Handle Sign Out
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Sign-out error:', error.message);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.email}</h3>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h3>Please Sign In</h3>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;*/
// src/AuthComponent.jsx
import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

const AuthComponent = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch((error) => alert(error.message));
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid gray' }}>
      {user ? (
        <div>
          <h3>Welcome, {user.email}</h3>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <form onSubmit={handleSignIn}>
          <h3>Sign In</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <button type="submit">Sign In</button>
        </form>
      )}
    </div>
  );
};

export default AuthComponent;


