import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Announcement = {
  id: string;
  message: string;
  acknowledgedBy: string[];
};
type InitialState = {
  announcements: Announcement[];
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  announcements: [],
  loading: true,
  error: "",
};

export const fetchAnnouncements = createAsyncThunk(
  "fetch/announcement",
  async () => {
    try {
      const response = await axios.get(`http://localhost:3001/announcements`);
      return response.data;
    } catch (e) {
      return "Error fetchinf Data";
    }
  }
);

export const addAnnouncement = createAsyncThunk(
  "add/announcement",
  (payload: Announcement) => {
    let newData: Announcement | null = null;
    fetch("http://localhost:3001/announcements", {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((rawData) => rawData.json())
      .then((data) => (newData = data))
      .catch(() => {
        return "Something went rong while adding an announcement";
      });
    return newData;
  }
);
const announcementSlice = createSlice({
  name: "announcement",
  initialState: initialState,
  reducers: {
    removeAnnouncement: (state, action: PayloadAction<{ id: string }>) => {
      state.announcements = state.announcements.filter(
        (obj: Announcement) => obj.id !== action.payload.id
      );
      return state;
    },
    clearAllAnnouncements: (state) => {
      state.announcements = [];
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnnouncements.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.announcements = action.payload;
    });
    builder.addCase(fetchAnnouncements.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(addAnnouncement.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      if (action.payload && typeof action.payload === "object") {
        state.announcements.push(action.payload as Announcement);
      }
    });
    builder.addCase(addAnnouncement.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { removeAnnouncement, clearAllAnnouncements } =
  announcementSlice.actions;

export default announcementSlice.reducer;
