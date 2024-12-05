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
import { HomePage } from "./pages/home-page";
import { HeadphoneReviewsPage } from "./pages/headphone-reviews-page";
import { HeadphoneCodecsPage } from "./pages/headphone-codecs-page";
import { HeadphonePage } from "./pages/headphone-page";
import { HeadphonesPage } from "./pages/headphones-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "headphones",
        element: <HeadphonesPage />,
        children: [
          {
            path: ":headphoneId",
            element: <HeadphonePage />,
            children: [
              {
                index: true,
                element: <Navigate to='reviews' replace />,
              },
              { path: "reviews", element: <HeadphoneReviewsPage /> },
              { path: "codecs", element: <HeadphoneCodecsPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
