// import {
//   createEntityAdapter,
//   createSlice,
//   PayloadAction,
// } from "@reduxjs/toolkit";

// interface Announcement {
//   id: string;
//   message: string;
//   acknowledgedBy: string[];
// }

// // 1. Create adapter
// const announcementsAdapter = createEntityAdapter<Announcement>({
//   sortComparer: (a, b) => a.message.localeCompare(b.message),
// });

// // 2. Adapter initial state
// const initialState = announcementsAdapter.getInitialState();

// const announcementSlice = createSlice({
//   name: "announcement",
//   initialState,
//   reducers: {
//     loadFromServer(state, action: PayloadAction<Announcement[]>) {
//       announcementsAdapter.setAll(state, action.payload);
//     },
//     setAnnouncements: announcementsAdapter.setAll,
//     addAnnouncement: announcementsAdapter.addOne,
//     updateAcknowledgement(
//       state,
//       action: PayloadAction<{ id: string; student: string }>
//     ) {
//       const existing = state.entities[action.payload.id];
//       if (
//         existing &&
//         !existing.acknowledgedBy.includes(action.payload.student)
//       ) {
//         existing.acknowledgedBy.push(action.payload.student);
//       }
//     },
//   },
// });

// export const {
//   selectAll: selectAllAnnouncements,
//   selectById: selectAnnouncementById,
// } = announcementsAdapter.getSelectors(
//   (state: { announcement: typeof initialState }) => state.announcement
// );

// export const {
//   setAnnouncements,
//   addAnnouncement,
//   updateAcknowledgement,
//   loadFromServer,
// } = announcementSlice.actions;

// export default announcementSlice.reducer;
