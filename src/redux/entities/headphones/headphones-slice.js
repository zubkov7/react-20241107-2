import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const {
  selectHeadphoneById,
  selectHeadphonesIds,
  selectHeadphonesRequestStatus,
} = headphonesSlice.selectors;
