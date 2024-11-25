import { createContext } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";

export const AuthContext = createContext();

export const Layout = ({ children, sidebar }) => {
  return (
    <AuthContext.Provider value={true}>
      <ThemeContextProvider>
        <div>
          <ProgressBar viewVariant='colored' />
          <Header />
          {children}
          {sidebar}
          <Footer />
        </div>
      </ThemeContextProvider>
    </AuthContext.Provider>
  );
};
