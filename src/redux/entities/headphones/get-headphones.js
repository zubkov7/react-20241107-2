import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphonesIds } from "./headphones-slice";

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/products");

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("headphones/getHeadphones no data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectHeadphonesIds(getState()).length === 0;
    },
  }
);
