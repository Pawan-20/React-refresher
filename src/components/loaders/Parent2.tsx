import React from "react";
import "../../App.css";
function Parent2() {
  return (
    <div className="bg-white h-screen">
      <div style={{ width: "25vw", height: "180px", padding: "16px" }}>
        <div className="placeholder heading"></div>

        <div className="placeholder line"></div>
        <div className="placeholder line"></div>
        <div className="placeholder line"></div>
        <div className="placeholder line"></div>

        <div className="flex flex-row-reverse gap-x-2">
          <div className="placeholder button"></div>
          <div className="placeholder button"></div>
        </div>
      </div>

      <br></br>
      {/* Simulated Table Loader */}
      <div className="w-full max-w-3xl mx-auto">
        {/* Table Header */}
        <div className="flex mb-4 gap-4">
          <div className="placeholder h-6 w-1/4"></div>
          <div className="placeholder h-6 w-1/4"></div>
          <div className="placeholder h-6 w-1/4"></div>
          <div className="placeholder h-6 w-1/4"></div>
        </div>

        {/* Table Rows */}
        {[1, 2, 3, 4].map((row) => (
          <div key={row} className="flex items-center gap-4 mb-4">
            <div className="placeholder h-4 w-1/4"></div>
            <div className="placeholder h-4 w-1/4"></div>
            <div className="placeholder h-4 w-1/4"></div>
            <div className="placeholder h-4 w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parent2;
