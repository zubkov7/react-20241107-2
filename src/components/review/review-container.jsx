import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviews-slice";
import { Review } from "./review";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review?.text) {
    return null;
  }

  return <Review text={review.text} userId={review.user} />;
};
