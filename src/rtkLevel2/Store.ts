// store.ts
import { configureStore } from "@reduxjs/toolkit";
import announcementReducer from "./AnnouncementSlice";

const store = configureStore({
  reducer: {
    announcements: announcementReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
