import { useAuth } from "../auth-context/use-auth";
import { Codecs } from "../codecs/codecs";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";

export const Headphone = ({ name, brand, reviews, codecs }) => {
  const { auth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {Boolean(codecs.length) && <Codecs codecs={codecs} />}
      {auth.isAuthorized && (
        <>
          <HeadphoneCounter />
          <ReviewForm />
        </>
      )}
    </section>
  );
};
