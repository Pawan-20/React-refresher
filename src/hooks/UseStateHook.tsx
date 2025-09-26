import { useState } from "react";

function initialValue() {
  console.log("called");
  //heavyCalculation
  return 4;
}
function UseStateHook() {
  const [count, setCount] = useState(initialValue);
  function handleDecrement() {
    setCount(count - 1);
    setCount(count - 1);
    // the above expected behaviour is that pressing the button should decrease the count by 2 , but in reality it will just decrease it by 1. That is why we use an arrow function to change the state as it returns the changed value first .
    // Hence   setCount((prev) => prev - 1);   setCount((prev) => prev - 1); will work
    setCount((prev) => prev - 1);
  }
  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  return (
    <div className="min-h-screen text-xl bg-amber-100">
      <button onClick={handleDecrement} className="p-2">
        -
      </button>
      {count}{" "}
      <button onClick={handleIncrement} className="p-2">
        +
      </button>
    </div>
  );
}

export default UseStateHook;
