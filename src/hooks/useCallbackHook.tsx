import React, { useState, useEffect, useCallback } from "react";
import { useGetAnnouncementsQuery } from "../learning rtk advanced/AnnouncementSlice";

function Child({ getItems }: { getItems: () => number[] }) {
  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    console.log("useEffect of child");
    setItems(getItems());
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

function UseCallbackHook() {
  const [count, setCount] = useState(1);
  const [dark, setDark] = useState(true);

  // This is a function. Each time my parent (i.e this function iteself ) re-renders, all the child components will re-render too. On each re-render this function will again be recomputed.
  // If We use a useMemo here , getItems instead of being a function will become an array of numbers.
  // Thus we use useCallback to memoise a function and handle referential equality in case of functions!. Now , changing dark state , will not cause a re-render of child state!

  //   const getItems = () => {
  //     return [count, count + 1, count + 2];
  //   };

  const getItems = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <div style={theme}>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={toggleTheme} className="p-2 border-2">
        Toggle theme
      </button>
      <Child getItems={getItems} />
    </div>
  );
}

export default UseCallbackHook;
