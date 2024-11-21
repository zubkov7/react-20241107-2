import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";
import "./app.css";

export const App = () => {
  return (
    <Layout>
      <HeadphonesPage title='headphones app' />
    </Layout>
  );
};
