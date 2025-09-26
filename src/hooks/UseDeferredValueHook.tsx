import React, {
  useDeferredValue,
  useEffect,
  useState,
  useTransition,
} from "react";
import { defineConfig } from "vite";

function ChildComponent({ value }: { value: string }) {
  const size = 8000;
  const deferredInput = useDeferredValue(value);
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(deferredInput);
  }
  useEffect(() => {
    console.log(`input value : ${value},\n deferred value : ${deferredInput} `);
  }, [deferredInput, value]);
  //   const arr = [];
  //   for (let i = 0; i < size; i++) {
  //     arr.push(value);
  //   }

  return (
    <div>
      {arr.map((ele, i) => (
        <div key={i}>{ele}</div>
      ))}
    </div>
  );
}
function UseDeferredValueHook() {
  const [input, setInput] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const deferredInput = useDeferredValue(input);

  function handleChange(value: string) {
    setInput(value);
  }
  return (
    <div>
      <input
        onChange={(e) => handleChange(e.target.value)}
        type="text"
        className="border-2"
        autoFocus
      />
      <ChildComponent value={input}></ChildComponent>
    </div>
  );
}

export default UseDeferredValueHook;
