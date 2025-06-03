import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type BellState = {
  announcements: {
    id: string;
    message: string;
    timestamp: number;
  }[];
};

const initialState: BellState = {
  announcements: [
    {
      id: "1",
      message: "Hello",
      timestamp: Date.now(),
    },
  ],
};

export const bellSlice = createSlice({
  name: "bell",
  initialState,
  reducers: {
    ringBell: {
      prepare(message: string): {
        payload: { message: string; timestamp: number };
      } {
        return {
          payload: {
            message: message.toUpperCase(),
            timestamp: Date.now(),
          },
        };
      },
      reducer(
        state,
        action: PayloadAction<{ message: string; timestamp: number }>
      ) {
        state.announcements.push({
          id: nanoid(),
          message: action.payload.message,
          timestamp: action.payload.timestamp,
        });
      },
    },
  },
});

export const { ringBell } = bellSlice.actions;
export default bellSlice.reducer;
