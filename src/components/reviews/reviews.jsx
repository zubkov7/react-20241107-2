import { useAuth } from "../auth-context/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

export const Reviews = ({ reviews, onAddReview }) => {
  const { auth } = useAuth();

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ id, text, user }) => (
          <li key={id}>
            <Review text={text} userId={user} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && <ReviewForm submitFormAction={onAddReview} />}
    </div>
  );
};
