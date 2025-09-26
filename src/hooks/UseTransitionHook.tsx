import React, { useState, useTransition } from "react";

function UseTransitionHook() {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const size = 5000;
  function handleChange(value: string) {
    setInput(value);
    //code below is lower priority
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < size; i++) {
        arr.push(value);
      }
      setList(arr);
    });
  }
  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        className="border-2"
        autoFocus
      />
      {isPending ? "Loading" : list.map((ele, i) => <div key={i}>{ele}</div>)}
    </div>
  );
}

export default UseTransitionHook;
