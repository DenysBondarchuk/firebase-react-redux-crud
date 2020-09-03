import React, { useEffect, useState, createContext } from 'react';

import { app } from '../services/firebase';

// --------------------------------------------------------------------------------------------------------------------

export const AuthContext = createContext();

// --------------------------------------------------------------------------------------------------------------------

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <p style={{ textAlign: 'center' }}>Authorization check...</p>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
