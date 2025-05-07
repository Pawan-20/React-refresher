import React, { useRef } from "react";
import Child3, { ChildHandler } from "./Child3";

function Parent3() {
  const childRef = useRef<ChildHandler>(null);
  function handleClick() {
    childRef.current?.focusOnInput();
  }
  return (
    <div className="h-screen bg-green-100">
      Parent3
      <button className="p-4 bg-blue-400" onClick={handleClick}>
        Focus on the input
      </button>
      <Child3 ref={childRef} />
    </div>
  );
}

export default Parent3;
