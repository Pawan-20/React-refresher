import React, { useRef } from "react";
import Child5 from "./Child5";

function Parent5() {
  const childRef = useRef<(data: number) => void>(null);
  function handleClick() {
    childRef.current?.(1);
  }
  return (
    <div>
      Parent5
      <br />
      <Child5 increment={(fn) => (childRef.current = fn)}></Child5>
      <br />
      <button className="bg-blue-500" onClick={handleClick}>
        Incremement
      </button>
    </div>
  );
}

export default Parent5;
