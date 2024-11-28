import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : { isAuthorized: true, name: "User" };
    });
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
