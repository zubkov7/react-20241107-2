import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getCodecsByRestaurantId } from "./get-codecs-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const codecsSlice = createSlice({
  name: "codecs",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getCodecsByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectById: selectCodecById, selectIds: selectCodecsIds } =
  entityAdapter.getSelectors((state) => state.codecs);
