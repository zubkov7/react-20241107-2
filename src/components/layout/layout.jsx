"use client";

import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  const { auth } = useAuth();

  const { isAuthorized } = auth;

  return (
    <div>
      <ProgressBar viewVariant='colored' />
      <Header />
      {children}
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
