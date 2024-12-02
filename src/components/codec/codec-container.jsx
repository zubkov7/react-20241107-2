import { useSelector } from "react-redux";
import { selectCodecById } from "../../redux/entities/codecs/codecs-slice";
import { Codec } from "./codec";

export const CodecContainer = ({ id }) => {
  const codec = useSelector((state) => selectCodecById(state, id));

  if (!codec?.type) {
    return null;
  }

  return <Codec type={codec.type} />;
};
