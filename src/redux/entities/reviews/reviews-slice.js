import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      }
    ),
});

export const { selectById: selectReviewById, selectIds: selectReviewsIds } =
  entityAdapter.getSelectors((state) => state.reviews);
