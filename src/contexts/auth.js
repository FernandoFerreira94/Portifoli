import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigate = useNavigate();

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
