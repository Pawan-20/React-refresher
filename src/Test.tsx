import React from "react";
import ReducerIstemaal from "./contextComponents/ReducerIstemaal";
import ScienceLab from "./advancedContext/bell-reducer/ScienceLab";
import BellContextProvider from "./advancedContext/bell-reducer/BellContextReducer";

function Test() {
  return (
    <BellContextProvider>
      <ScienceLab></ScienceLab>
    </BellContextProvider>
  );
}

export default Test;
