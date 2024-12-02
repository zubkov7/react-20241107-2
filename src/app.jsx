import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";
import "./app.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HeadphonePage } from "./components/headphone-page/headphone-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadphonesPage title='headphones app' />,
    errorElement: <Navigate to='/' />,
    children: [
      {
        path: "headphone/:headphoneId",
        element: <HeadphonePage />,
      },
      {
        path: "headphone/custom",
        element: <div>custom</div>,
      },
    ],
  },
  { path: "/about", element: <div>about</div> },
  { path: "blocked", element: <Navigate to='/about' replace /> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
