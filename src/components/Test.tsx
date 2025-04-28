import React from "react";

function Test() {
  return (
    <div className="border-2 border-amber-400 bg-red-200 h-screen text-center flex flex-col">
      <div className="h-6">1</div>
      <div className="h-6 flex flex-1 bg-blue-200 gap-4">
        <div className="flex flex-1 bg-amber-200">2.1</div>
        <div>2.2</div>
        <div>2.3</div>
      </div>
      <div className="h-6">3</div>
    </div>
  );
}

export default Test;
