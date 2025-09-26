// import React, { useEffect, useState } from "react";

// function UseEffectHook() {
//   const [windowidth, setWidowWidth] = useState(window.innerWidth);
//   const handleResize = () => {
//     setWidowWidth(window.innerWidth);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return <div>{windowidth}</div>;
// }

// export default UseEffectHook;

import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1", {
        signal: controller.signal,
      })
        .then((apiResponse) => apiResponse.json())
        .then((data) => setTitle(data.title))
        .catch((error) => {
          if ((error.name = "AbortError")) {
            setError("Aborted");
          } else setError(error.message || "Something went wrong");
        });
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [title]);
  return (
    <div>
      {title}
      <br />
      {error}
    </div>
  );
}

export default UseEffectHook;
