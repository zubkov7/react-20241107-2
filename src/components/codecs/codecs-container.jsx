import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { Codecs } from "./codecs";

export const CodecsContainer = ({ headphoneId }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  if (!headphone?.codecs) {
    return null;
  }

  return <Codecs codecsIds={headphone.codecs} />;
};
