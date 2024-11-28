import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones/headphones-slice";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
  },
});
