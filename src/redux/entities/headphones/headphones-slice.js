import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const {
  selectById: selectHeadphoneById,
  selectIds: selectHeadphonesIds,
} = entityAdapter.getSelectors((state) => state.headphones);
