import { configureStore } from "@reduxjs/toolkit";
import { CartSliceReducer, ProductReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    Product: ProductReducer,
    Cart: CartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
