import { Codecs } from "./codecs";
import { useGetCodecsByHeadphoneIdQuery } from "../../redux/services/api";

export const CodecsContainer = ({ headphoneId }) => {
  const { data, isLoading } = useGetCodecsByHeadphoneIdQuery(headphoneId);

  if (isLoading) {
    return "...loading";
  }

  if (!data.length) {
    return null;
  }

  return <Codecs codecs={data} />;
};
