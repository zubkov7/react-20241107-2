import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <HeadphonesPage title='headphones app' />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
