// AnnouncementSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Announcement = {
  id: number;
  message: string;
  acknowledgedBy: string[];
};

type State = {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  announcements: [],
  loading: false,
  error: null,
};

// 🔔 Async Thunks
export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetch",
  async () => {
    const res = await axios.get("http://localhost:3001/announcements");
    return res.data; // this becomes action.payload
  }
);

/*

Redux Toolkit's createAsyncThunk is like a helper that:

sends the request, and automatically dispatches actions like:

yourThunkName/pending

yourThunkName/fulfilled ✅

yourThunkName/rejected ❌

The fulfilled action it dispatches has this shape:

{
  type: 'fetchAnnouncements/fulfilled',
  payload: <data from server>
}
  🧩 Piece	🤓 Role
createAsyncThunk	Sends the request and dispatches pending, fulfilled, or rejected.
extraReducers	Handles those dispatched actions (especially fulfilled).

In short , asyncThunks will return the data from te serer as actions to the extra reducers

*/

export const acknowledgeAnnouncement = createAsyncThunk(
  "announcements/acknowledge",
  async ({ id, user }: { id: number; user: string }) => {
    // 🔁 Get current announcement from server
    const res = await axios.get(`http://localhost:3001/announcements/${id}`);
    const announcement = res.data;

    // ✅ Add user to acknowledgedBy
    const updated = {
      ...announcement,
      acknowledgedBy: [...announcement.acknowledgedBy, user],
    };

    // 💾 PUT the updated announcement
    const putRes = await axios.put(
      `http://localhost:3001/announcements/1`,
      updated
    );

    return putRes.data; // Becomes action.payload
  }
);
// 📦 Slice
const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    addAnnouncement(state, action) {
      state.announcements.push(action.payload);
    },
    removeAnnouncement(state, action) {
      state.announcements = state.announcements.filter(
        (a) => a.id !== action.payload
      );
    },
    clearAllAnnouncements(state) {
      state.announcements = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch announcements.";
      })
      .addCase(acknowledgeAnnouncement.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.announcements.findIndex((a) => a.id === updated.id);
        if (index !== -1) {
          state.announcements[index] = updated;
        }
      })
      .addCase(acknowledgeAnnouncement.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch announcements.";
      });
  },
});

export const { addAnnouncement, removeAnnouncement, clearAllAnnouncements } =
  announcementSlice.actions;

export default announcementSlice.reducer;
