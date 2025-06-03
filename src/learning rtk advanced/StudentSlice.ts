import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StudentState = {
  acknowledged: {
    student: string;
    announcementId: string;
  }[];
};

const initialState: StudentState = {
  acknowledged: [{ announcementId: "1", student: "Alice" }],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    acknowledgeAnnouncement: (
      state,
      action: PayloadAction<{ student: string; announcementId: string }>
    ) => {
      state.acknowledged.push(action.payload);
    },
  },
});

export const { acknowledgeAnnouncement } = studentSlice.actions;
export default studentSlice.reducer;
