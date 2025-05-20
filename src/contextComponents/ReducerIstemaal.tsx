import React, { useReducer } from "react";
import counterReducer from "./reducerBot";

function ReducerIstemaal() {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      Value : {state}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕ Add</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖ Remove</button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔄 Reset</button>
    </div>
  );
}

export default ReducerIstemaal;
