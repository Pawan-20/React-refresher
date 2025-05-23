import React from "react";
import MusicRoom from "./MusicRoom";
import { Provider } from "react-redux";
import { store } from "./Store";

function RTKIndex() {
  return (
    <Provider store={store}>
      <MusicRoom></MusicRoom>
    </Provider>
  );
}

export default RTKIndex;
