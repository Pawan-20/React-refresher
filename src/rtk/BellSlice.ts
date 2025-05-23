import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BellEntry = { room: string; time: string };
type BellState = {
  count: number;
  log: BellEntry[];
};

const initialState: BellState = {
  count: 0,
  log: [],
};

const bellSlice = createSlice({
  name: "bell", // This name is used for debugging purposes , should be unique. RTK also uses this name internally to name some actions  example : bell/ring
  initialState,
  reducers: {
    ring: (state, action: PayloadAction<{ room: string }>) => {
      state.count += 1;
      state.log.push({
        room: action.payload.room,
        time: new Date().toLocaleTimeString(),
      });
    },
    reset: (state: any) => {
      state.count = 0;
      // Keep log if you want
    },
  },
});

export const { ring, reset } = bellSlice.actions;
export default bellSlice.reducer;

/*
4. "I don’t see an object named actions, so how can we destructure bellSlice.actions?"
That’s because createSlice() returns this whole object:
{
  name: 'bell',
  reducer: ƒ,     // <-- The main reducer function
  actions: {
    ring: ƒ,
    reset: ƒ
  },
  caseReducers: {
    ring: ƒ,
    reset: ƒ
  },
  getInitialState: ƒ
}
*/
