import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?productId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("reviews/getReviewsByRestaurantId");
      return;
    }

    return result;
  }
);
