// import React, { useState, useRef } from "react";

// export default function Throttler() {
//   const [inputValue, setInputValue] = useState(""); // immediate input
//   const [throttledValue, setThrottledValue] = useState(""); // updated at most once per interval
//   const lastUpdateRef = useRef(0); // track last update timestamp

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     const now = Date.now();
//     if (now - lastUpdateRef.current >= 2000) {
//       // update throttled value if 2s have passed
//       setThrottledValue(value);
//       lastUpdateRef.current = now;
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type something..."
//         style={{ padding: "8px", width: "200px" }}
//       />
//       <p>Throttled Value: {throttledValue}</p>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";

export default function Throttler() {
  const colors = ["red", "green", "blue", "orange", "purple", "pink"];
  const [bgColor, setBgColor] = useState("lightgray");
  const lastUpdateRef = useRef(0); // track last update timestamp

  const handleClick = () => {
    const now = Date.now();
    if (now - lastUpdateRef.current >= 2000) {
      // throttle interval = 2s
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
      lastUpdateRef.current = now;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Change Color
      </button>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {bgColor}
      </div>
    </div>
  );
}
