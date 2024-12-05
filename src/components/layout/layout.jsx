import { Outlet } from "react-router-dom";
import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = () => {
  const { auth } = useAuth();

  const { isAuthorized } = auth;

  return (
    <div>
      <ProgressBar viewVariant='colored' />
      <Header />
      <Outlet />
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
