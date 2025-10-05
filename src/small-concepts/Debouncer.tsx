import React, { useEffect, useState } from "react";

function Debouncer() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setVisible(true);
    }, 2000);
    // cleanup previous timer if inputValue changes before 2 seconds
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>
      <input
        className="border-2 m-2"
        onChange={(e) => setValue(e.target.value)}
      />
      <div>{debouncedValue}</div>
      <button className={`py-2 bg-green-200 ${!visible && "hidden"}`}>
        {" "}
        Search{" "}
      </button>
    </div>
  );
}

export default Debouncer;
