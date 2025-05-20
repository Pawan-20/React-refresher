import React, { createContext, useContext, useReducer, useState } from "react";
import bellReducer, { BellActions, BellState } from "./BellReducer";

type BellContextType = {
  state: BellState;
  dispatch: React.Dispatch<BellActions>;
};
const BellReducerContext = createContext<BellContextType | undefined>(
  undefined
);
function BellContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(bellReducer, { count: 0, log: [] });
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
