import { useParams } from "react-router-dom";
import { HeadphoneContainer } from "../headphone/headphone-container";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  return <HeadphoneContainer id={headphoneId} />;
};
