import { createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_FULFILLED_STATUS,
  REQUEST_IDLE_STATUS,
  REQUEST_PENDING_STATUS,
  REQUEST_REJECTED_STATUS,
} from "./constants";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id] || REQUEST_IDLE_STATUS,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_PENDING_STATUS;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_FULFILLED_STATUS;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_REJECTED_STATUS;
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
