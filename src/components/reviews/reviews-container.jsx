import { Reviews } from "./reviews";
import {
  useAddReviewMutation,
  useGetReviewsByHeadphoneIdQuery,
  useGetUsersQuery,
} from "../../redux/services/api";
import { useCallback } from "react";

export const ReviewsContainer = ({ headphoneId }) => {
  const { data, isFetching: isGetReviewsFetching } =
    useGetReviewsByHeadphoneIdQuery(headphoneId);
  useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ headphoneId, review });
    },
    [addReview, headphoneId]
  );

  if (isGetReviewsFetching || isAddReviewFetching) {
    return "...loading";
  }

  if (!data.length) {
    return null;
  }

  return <Reviews reviews={data} onAddReview={handleAddReview} />;
};
