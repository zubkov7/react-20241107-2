import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
