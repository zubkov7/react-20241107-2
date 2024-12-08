import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCodecsByRestaurantId = createAsyncThunk(
  "codecs/getCodecsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/codecs?productId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("reviews/getReviewsByRestaurantId");
      return;
    }

    return result;
  }
);
