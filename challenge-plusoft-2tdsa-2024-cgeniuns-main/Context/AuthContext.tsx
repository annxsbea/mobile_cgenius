// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AtendenteResponse } from '../@types';

const AuthContext = createContext<{
  userLogged: AtendenteResponse | null;
  setUserLogged: React.Dispatch<React.SetStateAction<AtendenteResponse | null>>;
}>({
  userLogged: null,
  setUserLogged: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userLogged, setUserLogged] = useState<AtendenteResponse | null>(null);

  return (
    <AuthContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
