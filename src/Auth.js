import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
    
  const login = (tokens) => {
    setAccessToken(tokens.access_token);
  };
const logout = () => {
    setAccessToken(null);
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
