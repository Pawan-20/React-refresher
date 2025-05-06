// Bringing in tools to build the kid
import React, { useRef } from "react";

// Bringing in the robot that gives us a button
import Child2 from "./Child2";

function Parent2() {
  // 🗃️ A drawer where the kid stores the button from the robot
  const updaterRef = useRef<(val: string) => void>(null);

  // 🚀 When the kid clicks the button, it uses the robot’s mood-changer
  const handleUpdate = () => {
    updaterRef.current?.("Updated by parent"); // push the robot's mood button
  };

  return (
    <div className="bg-amber-200 h-screen text-center">
      {/* This is the button the kid sees on screen */}
      <button className="bg-green-300 p4" onClick={handleUpdate}>
        CLick Me
      </button>

      {/* 🤖 The robot gives us a mood-changing button when it loads */}
      <Child2 registerUpdater={(fn) => (updaterRef.current = fn)} />
    </div>
  );
}

export default Parent2;
