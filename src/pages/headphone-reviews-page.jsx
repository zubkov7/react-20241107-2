import { ReviewsContainer } from "../components/reviews/reviews-container";

export const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return <ReviewsContainer headphoneId={headphoneId} />;
};
