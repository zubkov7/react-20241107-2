import { useAuth } from "../auth-context/use-auth";
import { ReviewForm } from "../review-form/review-form";
import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ reviewsIds }) => {
  const { auth } = useAuth();

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewsIds.map((id) => (
          <li key={id}>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
      {auth.isAuthorized && <ReviewForm />}
    </div>
  );
};
