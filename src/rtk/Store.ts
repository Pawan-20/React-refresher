import { configureStore } from "@reduxjs/toolkit";
import bellReducer from "./BellSlice";

export const store = configureStore({
  reducer: {
    bell: bellReducer,
  },
});

// This helps TypeScript understand the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
