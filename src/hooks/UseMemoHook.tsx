import React, { useState, useEffect, useMemo } from "react";

//remember whenever a state changes the entire component is re-rendered. so clicking toggle as well will cause a re-render , which causes the recomputation associated with doubleNumber
function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);

  const chooseTheme = useMemo(
    () => ({
      color: theme ? "white" : "black",
      backgroundColor: theme ? "black" : "white",
    }),
    [theme]
  );
  function slowCalculation() {
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  }
  useEffect(() => {
    console.log("inside useEffect");
  }, [chooseTheme]);
  // const doubleNumber = useMemo(() => slowCalculation(), [count]);
  const doubleNumber = slowCalculation();

  return (
    <div>
      <input
        type="number"
        className="border-2 border-black m-2"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <div className="w-80 h-20 p-2 rounded-3xl" style={chooseTheme}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, et.
      </div>
      <button
        className="m-2 p-2 bg-green-500 rounded-3xl"
        onClick={() => setTheme((prev) => (prev ? false : true))}
      >
        ToggleTheme
      </button>
      <div>{doubleNumber}</div>
    </div>
  );
}

export default UseMemoHook;
