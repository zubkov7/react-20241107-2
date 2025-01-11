"use client";

import { useAuth } from "../auth-context/use-auth";
import { Button } from "../button/button";

export const AuthButton = () => {
  const { auth, toggleAuth } = useAuth();

  const { isAuthorized, name } = auth;

  return (
    <div>
      {isAuthorized && name && <div>{auth.name}</div>}
      <Button onClick={toggleAuth}>{isAuthorized ? "Logout" : "Login"}</Button>
    </div>
  );
};
