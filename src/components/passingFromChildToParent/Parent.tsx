// We bring in React tools to build the kid (Parent)
import React, { useRef } from "react";

// We import the robot (Child) and the remote control description (ChildHandle)
import Child, { ChildHandle } from "./Child";

function Parent() {
  // 🎮 This is where we keep our remote control to talk to the robot
  // TypeScript: <ChildHandle> means the remote will have the `updateChildData` button
  const childRef = useRef<ChildHandle>(null);

  // 👆 When the kid clicks a button, we tell the robot: "Change your mood!"
  function handleClick() {
    childRef.current?.updateChildData("New value"); // 🔁 uses the remote to send new data
  }

  // 🏡 This is what the kid shows on screen: a button and the robot
  return (
    <div className="h-screen bg-green-100 p-2">
      <h2>Parent</h2>

      {/* This is the button the kid clicks to change the robot */}
      <button onClick={handleClick} className="p-4 bg-blue-500">
        Click Me
      </button>

      {/* 🎮 We give the robot the remote control so the kid can use it */}
      <Child ref={childRef} />
    </div>
  );
}

export default Parent;
