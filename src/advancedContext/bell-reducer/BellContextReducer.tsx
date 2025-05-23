import React, { createContext, useContext, useEffect, useReducer } from "react";
import bellReducer, { BellActions, BellState } from "./BellReducer";
import { loadBellState, saveBellState } from "../../utils/storage";

type BellContextType = {
  state: BellState;
  dispatch: React.Dispatch<BellActions>;
};
const BellReducerContext = createContext<BellContextType | undefined>(
  undefined
);
function BellContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(bellReducer, loadBellState());
  useEffect(() => {
    saveBellState(state);
  }, [state]);
  return (
    <BellReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </BellReducerContext.Provider>
  );
}

export const useBell = () => {
  const context = useContext(BellReducerContext);
  if (!context) throw new Error("useBell must be used within a BellProvider");
  return context;
};
export default BellContextProvider;
