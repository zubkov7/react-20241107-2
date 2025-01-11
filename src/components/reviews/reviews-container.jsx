"use client";

import { Reviews } from "./reviews";
import { addReviewAction } from "../../actions/add-review-action";
import { usePathname } from "next/navigation";
import { useCallback, useOptimistic } from "react";

export const ReviewsContainer = ({ headphoneId, reviews }) => {
  const pathname = usePathname();

  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      { ...optimisticValue, id: "creating" },
    ]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: "",
          rating: 5,
        };
      }

      const text = formData.get("text");
      const rating = formData.get("rating");

      const review = { text, rating, user: "asdasdoi29tu384f" };

      addOptimisticReview(review);

      await addReviewAction({ headphoneId, pathname, review });

      return {
        text: "default",
        rating: 5,
      };
    },
    [addOptimisticReview, headphoneId, pathname]
  );

  if (!optimisticReviews.length) {
    return null;
  }

  return <Reviews reviews={optimisticReviews} onAddReview={handleAddReview} />;
};
