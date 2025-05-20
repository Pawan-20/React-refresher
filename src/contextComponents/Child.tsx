import React, { useContext } from "react";
import { schoolContext } from "./SchoolProvider";
import AnotherChild from "./AnotherChild";

function Child() {
  const { schoolName } = useContext(schoolContext);
  return (
    <div className="h-screen bg-black-200 text-white">
      SchoolName : {schoolName}
      <AnotherChild></AnotherChild>
    </div>
  );
}

export default Child;
