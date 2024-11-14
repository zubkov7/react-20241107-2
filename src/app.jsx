import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";

export const App = () => {
  return (
    <Layout sidebar={<div>sidebar</div>}>
      <HeadphonesPage />
    </Layout>
  );
};
