import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, headphone) => {
    acc[headphone.id] = headphone;

    return acc;
  }, {}),
  ids: normalizedHeadphones.map(({ id }) => id),
};

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState,
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
  },
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphonesSlice.selectors;
