import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutEffectHook() {
  const ref = useRef<any>(null);
  useLayoutEffect(() => {
    console.log(ref.current.style, "what am I");
    ref.current.style.backgroundColor = "green";
  }, []);
  return (
    <div
      ref={ref}
      style={{
        width: "400px",
        height: "300px",
        backgroundColor: "red",
        border: "2px solid black",
      }}
    >
      Box! Box !
    </div>
  );
}

export default UseLayoutEffectHook;
