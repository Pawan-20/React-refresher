import React, { useContext } from "react";
import { schoolContext } from "./SchoolProvider";

function AnotherChild() {
  const { schoolName, setSchoolName } = useContext(schoolContext);
  return (
    <div className="h-screen bg-pink-200">
      Name : {schoolName}
      <br></br>
      <button
        onClick={() => {
          setSchoolName("Hello");
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default AnotherChild;
