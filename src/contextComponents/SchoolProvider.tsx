import React, { createContext, useState } from "react";

export const schoolContext = createContext<any>(null);

function SchoolProvider({ children }: { children: React.ReactNode }) {
  const [schoolName, setSchoolName] = useState("Elementary");
  return (
    <schoolContext.Provider value={{ schoolName, setSchoolName }}>
      {children}
    </schoolContext.Provider>
  );
}

export default SchoolProvider;
