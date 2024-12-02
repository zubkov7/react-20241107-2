import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }

      return state;
    },
  },
  selectors: {
    selectCartItemAmountById: (state, id) => state[id],
  },
});

export const { selectCartItemAmountById } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector([selectCartSlice], (cartState) =>
  Object.keys(cartState).reduce((acc, id) => {
    acc.push({ id, amount: cartState[id] });

    return acc;
  }, [])
);
