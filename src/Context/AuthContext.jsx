import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lastVisitedPage, setLastVisitedPage] = useState('/');

  const login = () => {
    // Simulación de inicio de sesión exitoso
    setUser({ username: 'usuario' });
  };

  const logout = () => {
    // Simulación de cierre de sesión
    setUser(null);
  };

  const setLastVisited = (path) => {
    setLastVisitedPage(path);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, lastVisitedPage, setLastVisited }}>
      {children}
    </AuthContext.Provider>
  );
};
