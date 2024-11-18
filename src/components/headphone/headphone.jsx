import { Codecs } from "../codecs/codecs";
import { Counter } from "../counter/counter";
import { Reviews } from "../reviews/reviews";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {reviews.length ? <Reviews reviews={reviews} /> : <div>empty review</div>}
      {codecs.length ? <Codecs codecs={codecs} /> : <div>empty codecs</div>}
      <Counter />
    </section>
  );
};
