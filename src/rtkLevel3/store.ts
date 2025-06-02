import { configureStore } from "@reduxjs/toolkit";
import { announcementReducer, listenerMiddleware } from "./AnnouncementSlice";

export const store = configureStore({
  reducer: {
    announcements: announcementReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
