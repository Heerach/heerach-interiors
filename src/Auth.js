// src/Auth.js
import React, { useState } from 'react';
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
