// Bringing in tools to build the robot
import React, { useEffect, useState } from "react";

// This tells TypeScript: "Parent must give me a place to put my button (a function)"
type ChildProps = {
  registerUpdater: (fn: (val: string) => void) => void;
};

function Child2({ registerUpdater }: ChildProps) {
  // 🤖 The robot has a mood again
  const [data, setData] = useState("Initial Data");

  // 🛠️ When the robot is built (component mounts), it gives its mood-button to the parent
  useEffect(() => {
    registerUpdater(setData); // Giving the parent a function to update my mood
  }, []);

  // 🧾 The robot shows its current mood
  return <div>Child2's Data : {data}</div>;
}

export default Child2;
