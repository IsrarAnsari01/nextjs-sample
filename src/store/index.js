import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlices";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
