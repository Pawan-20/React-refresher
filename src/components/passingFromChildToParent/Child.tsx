// We bring in React tools we need to build the robot (Child)
import React, { forwardRef, useImperativeHandle, useState } from "react";

// 📘 This tells TypeScript: "Here’s what the robot’s remote control can do"
// The remote has one button: `updateChildData`, and it needs a string to work
export type ChildHandle = {
  updateChildData: (value: string) => void;
};

// 🧸 This is our robot (Child) — but we give it a remote (ref) that the parent can use
const Child = forwardRef<ChildHandle>((props, ref) => {
  // 🤖 This is the robot's mood, which it controls itself
  const [data, setData] = useState("Initial Data");

  // 🎮 This lets us *customize* what the Parent can do with the remote control
  useImperativeHandle(ref, () => ({
    // ✅ This button lets the Parent change the robot's mood
    updateChildData(value: string) {
      setData(value); // we change the mood to the new value
    },
  }));

  // 🪪 This is what the robot shows on the screen
  return <div>Child Data : {data}</div>;
});

// 🏷️ We share the robot with other files
export default Child;
