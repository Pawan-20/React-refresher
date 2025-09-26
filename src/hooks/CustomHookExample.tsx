import React from "react";
import { useCustomHook, useDebugHook } from "./useCustomHook";

function CustomHookExample() {
  const [name, setName] = useCustomHook("name", "Harris");
  useDebugHook(name);
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name}
    </div>
  );
}

export default CustomHookExample;
