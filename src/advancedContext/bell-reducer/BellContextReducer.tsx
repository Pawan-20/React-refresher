import React, { createContext, useContext, useState } from "react";

export const BellContext = createContext<any>(null);
function BellContextReducer({ children }: { children: React.ReactNode }) {
  const [bellCount, setBellCount] = useState(0);

  const ringBell = () => setBellCount((prev) => prev + 1);
  return (
    <BellContext.Provider value={{ bellCount, ringBell }}>
      {children}
    </BellContext.Provider>
  );
}
export const useBell = () => {
  const context = useContext(BellContext);
  if (!context) {
    throw new Error("useBell must be used within a context provider");
  }
  return context;
};

export default BellContextReducer;
