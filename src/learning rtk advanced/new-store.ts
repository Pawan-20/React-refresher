import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BellReducer from "./BellSlice";
import StudentReducer from "./StudentSlice";
import { announcementSlice } from "./AnnouncementSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

// ✅ Save current state to localStorage
const saveState = (state: any) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("reduxState", serialized);
  } catch (e) {
    // Ignore write errors
  }
};

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

store.subscribe(() => {
  saveState(store.getState());
});
export type RootState = {
  bell: ReturnType<typeof BellReducer>;
  student: ReturnType<typeof StudentReducer>;
  announcement: ReturnType<typeof announcementSlice.reducer>;
};
// Or, keep the inferred version:
export type AppDispatch = typeof store.dispatch;
