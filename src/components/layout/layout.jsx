import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children, sidebar }) => {
  const { auth } = useAuth();

  const { isAuthorized } = auth;

  return (
    <div>
      <ProgressBar viewVariant='colored' />
      <Header />
      {children}
      {sidebar}
      {isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
