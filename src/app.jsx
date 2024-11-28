import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <HeadphonesPage title='headphones app' />
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
