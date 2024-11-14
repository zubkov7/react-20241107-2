import { Codecs } from "../codecs/codecs";
import { Count } from "../count/count";
import { Reviews } from "../reviews/reviews";

export const Headphone = ({ headphone }) => {
  const { name, reviews, codecs } = headphone;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <Codecs codecs={codecs} />
      <Count />
    </div>
  );
};
