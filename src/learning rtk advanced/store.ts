// import { configureStore } from "@reduxjs/toolkit";
// import announcementReducer, { loadFromServer } from "./AnnouncementSlice";

// export const store = configureStore({
//   reducer: {
//     announcement: announcementReducer,
//   },
// });

// const preloadedAnnouncements = [
//   {
//     id: "1",
//     message: "New lab rules posted",
//     acknowledgedBy: ["Alice"],
//   },
// ];

// store.dispatch(loadFromServer(preloadedAnnouncements));
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
