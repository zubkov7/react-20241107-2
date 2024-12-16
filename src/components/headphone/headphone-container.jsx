import { getHeadphones } from "../../services/get-headphones";
import { Headphone } from "./headphone";

export const HeadphoneContainer = async ({ id }) => {
  const headphones = await getHeadphones();

  const headphone = headphones.find(
    ({ id: headphoneId }) => headphoneId === id
  );

  if (!headphone) {
    return null;
  }

  const { name, brand, reviews, codecs } = headphone;

  return (
    <Headphone
      name={name}
      brand={brand}
      reviews={reviews}
      codecs={codecs}
      id={id}
    />
  );
};
