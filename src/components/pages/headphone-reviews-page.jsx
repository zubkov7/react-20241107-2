import { getReviewsByHeadphoneId } from "../../services/get-reviews-by-headphone-id";
import { getUsers } from "../../services/get-users";
import { ReviewsContainer } from "../reviews/reviews-container";
import { UsersContextProvider } from "../users-context/users-context";

export const HeadphoneReviewsPage = async ({ params }) => {
  const { headphoneId } = await params;

  const reviewsData = getReviewsByHeadphoneId(headphoneId);
  const usersData = getUsers();

  const [reviews, users] = await Promise.all([reviewsData, usersData]);

  return (
    <UsersContextProvider users={users}>
      <ReviewsContainer headphoneId={headphoneId} reviews={reviews} />;
    </UsersContextProvider>
  );
};
