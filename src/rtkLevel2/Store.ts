import { configureStore } from "@reduxjs/toolkit";
import announcementReducer from "./AnnouncementSlice";

export const store = configureStore({
  reducer: {
    announcement: announcementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
