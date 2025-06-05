// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// type Announcement = {
//   id: string;
//   message: string;
// };

// type State = {
//   announcements: Announcement[];
//   currentPage: number;
//   pageSize: number;
//   totalPages: number;
//   status: "idle" | "loading" | "succeeded" | "failed";
// };

// const initialState: State = {
//   announcements: [],
//   currentPage: 1,
//   pageSize: 2,
//   totalPages: 1,
//   status: "idle",
// };

// export const fetchPaginatedAnnouncements = createAsyncThunk(
//   "bell/fetchPaginated",
//   async ({ page, limit }: { page: number; limit: number }) => {
//     const res = await axios.get(
//       `http://localhost:3001/announcements?page=${page}&_limit=${limit}`
//     );

//     return {
//       data: res.data,
//       totalCount: parseInt(res.headers["x-total-count"], 10),
//     };
//   }
// );

// const bellSlice = createSlice({
//   name: "bell",
//   initialState,
//   reducers: {
//     goToPage(state, action) {
//       state.currentPage = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchPaginatedAnnouncements.fulfilled, (state, action) => {
//       state.announcements = action.payload.data;
//       state.totalPages = Math.ceil(action.payload.totalCount / state.pageSize);
//       state.status = "succeeded";
//     });
//   },
// });

// export const { goToPage } = bellSlice.actions;
// export default bellSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

type Announcement = {
  id: string;
  message: string;
};

type State = {
  announcements: Announcement[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: State = {
  announcements: [],
};

export const announcementSlice = createApi({
  reducerPath: "announcements",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAnnouncements: builder.query({
      query: () => "announcements",
    }),
    addAnnouncement: builder.mutation({
      query: (newAnnouncement) => ({
        url: "announcements",
        method: "POST",
        body: newAnnouncement,
      }),
    }),
  }),
});

export const { useGetAnnouncementsQuery, useAddAnnouncementMutation } =
  announcementSlice;
