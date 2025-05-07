import React, { useRef } from "react";
import Child4, { handleChild } from "./Child4";

function Parent4() {
  const childRef = useRef<handleChild>(null);
  function handleChange() {
    childRef.current?.handleValidation();
  }
  return (
    <div className="h-screen bg-green-200 text-center">
      <Child4 ref={childRef}></Child4>
      <button onClick={handleChange} className="p-4 mt-2 bg-blue-400">
        Validate
      </button>
    </div>
  );
}

export default Parent4;
