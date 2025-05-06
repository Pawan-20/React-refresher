import React, { useState } from "react";
type ChildProps = {
  notification: any;
};
function Child1({ notification }: ChildProps) {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>{data}</h1>
      <input
        className="bg-blue-500 m-2 p-2"
        onChange={(e) => {
          notification(data);
          setData(e.target.value);
        }}
      />
    </div>
  );
}

export default Child1;
