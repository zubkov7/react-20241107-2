import { ReviewsContainer } from "../reviews/reviews-container";

export const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return <ReviewsContainer headphoneId={headphoneId} />;
};
