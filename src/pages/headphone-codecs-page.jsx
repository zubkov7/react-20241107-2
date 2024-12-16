import { CodecsContainer } from "../components/codecs/codecs-container";

export const HeadphoneCodecsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return <CodecsContainer headphoneId={headphoneId} />;
};
