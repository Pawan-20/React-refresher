export type BellState = {
  count: number;
  log: { room: string; time: string }[];
};
export type BellActions =
  | { type: "RING"; payload: { room: string } }
  | { type: "RESET" };

export default function bellReducer(state: BellState, action: BellActions) {
  switch (action.type) {
    case "RING":
      return {
        count: state.count + 1,
        log: [
          ...state.log,
          { room: action.payload.room, time: new Date().toLocaleTimeString() },
        ],
      };
    case "RESET":
      return {
        count: 0,
        log: [...state.log],
      };
    default:
      return state;
  }
}
