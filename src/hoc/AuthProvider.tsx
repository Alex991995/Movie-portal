import React, { useContext, createContext, useState } from 'react';

type UserType = { user: string | null; logOut: () => void; logIn: (username: string) => void };

const AuthContext = createContext<UserType>({
  user: null,
  logOut: () => {},
  logIn: () => {},
});

export interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const authorizedUser = localStorage.getItem('authorized');
  const [user, setUser] = useState(authorizedUser);

  function logOut() {
    setUser(null);
    localStorage.removeItem('authorized');
  }

  function logIn(username: string) {
    setUser(username);
    localStorage.setItem('authorized', username);
  }

  return <AuthContext.Provider value={{ user, logOut, logIn }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
