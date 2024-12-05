import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../components/reviews/reviews-container";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  return <ReviewsContainer headphoneId={headphoneId} />;
};
