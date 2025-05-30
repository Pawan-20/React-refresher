import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import Classrooms from "./Classrooms";

function RTKIndex2() {
  return (
    <Provider store={store}>
      <Classrooms></Classrooms>
    </Provider>
  );
}

export default RTKIndex2;
