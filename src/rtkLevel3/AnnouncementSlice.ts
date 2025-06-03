import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createListenerMiddleware,
} from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "./store";

export interface Announcement {
  id: string;
  message: string;
  acknowledgedBy: string[];
}

const announcementsAdapter = createEntityAdapter<Announcement>();

const initialState = announcementsAdapter.getInitialState({
  loading: false,
});

// Thunks
export const fetchAnnouncements = createAsyncThunk(
  "announcements/fetchAll",
  async () => {
    const res = await axios.get("http://localhost:3000/announcements");
    return res.data;
  }
);

export const acknowledgeAnnouncement = createAsyncThunk(
  "announcements/acknowledge",
  async ({ id, user }: { id: string; user: string }) => {
    const res = await axios.get<Announcement>(
      `http://localhost:3000/announcements/${id}`
    );
    const updated = {
      ...res.data,
      acknowledgedBy: [...res.data.acknowledgedBy, user],
    };
    await axios.put(`http://localhost:3000/announcements/${id}`, updated);
    return updated;
  }
);

// Slice
const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    addAnnouncementManually: announcementsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        announcementsAdapter.setAll(state, action.payload);
      })
      .addCase(acknowledgeAnnouncement.fulfilled, (state, action) => {
        announcementsAdapter.upsertOne(state, action.payload);
      });
  },
});

export const listenerMiddleware = createListenerMiddleware();

// Listener: Log every time a new announcement is added manually
listenerMiddleware.startListening({
  actionCreator: announcementSlice.actions.addAnnouncementManually,
  effect: async (action) => {
    console.log("🔔 Bell rang! New Announcement:", action.payload.message);
  },
});

export const announcementActions = announcementSlice.actions;
export const announcementReducer = announcementSlice.reducer;
export const announcementSelectors =
  announcementsAdapter.getSelectors<RootState>((state) => state.announcements);
