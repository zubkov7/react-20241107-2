import { AppClientOnly } from "./app-client-only";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

const Page = () => {
  return <AppClientOnly />;
};

export default Page;
