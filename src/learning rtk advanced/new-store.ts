import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BellReducer from "./BellSlice";
import StudentReducer from "./StudentSlice";
import { announcementSlice } from "./AnnouncementSlice";

export const store = configureStore({
  reducer: {
    bell: BellReducer,
    student: StudentReducer,
    [announcementSlice.reducerPath]: announcementSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(announcementSlice.middleware),
  // preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
