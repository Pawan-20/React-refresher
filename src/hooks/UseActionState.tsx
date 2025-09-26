// import React, { useState } from "react";

// // helper: simulate API
// const wait = (value: string) =>
//   new Promise<string>((resolve) => {
//     setTimeout(() => resolve(value), 1000); // 1s delay
//   });

// function UseActionState() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState<string | null>(null);

//   const handleSubmit = async () => {
//     setLoading(true);
//     const data = await wait("✅ API finished!");
//     setMessage(data);
//     setLoading(false);
//   };

//   return (
//     <div className="p-4">
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         {loading ? "Loading..." : "Click Me"}
//       </button>

//       {message && <p className="mt-2">{message}</p>}
//     </div>
//   );
// }

// export default UseActionState;

import React, { useActionState, useState } from "react";
import { useActionData } from "react-router-dom";

// helper: simulate API
const wait = (value: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(value), 1000); // 1s delay
  });
const handleSubmit = async (prevState: string | null, formData: FormData) => {
  // we are not using any form data here , but the actio nfunction has it's use.
  const data = await wait("✅ API finished!");
  return data;
};

function UseActionState() {
  // data is the current state value returned by your handleSubmit function, it works just like useState. Whatever your handleSubmit returns becomes the new message.
  // The action is nowhere defined , but we just sync it with the onSubmit function.
  // is Pending is well isPending
  // undefined here is the second argument that the hook takes it is the initial value
  //
  const [data, action, isPending] = useActionState(handleSubmit, null);

  return (
    <div className="p-4">
      <form action={action}>
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isPending ? "Loading..." : "Click Me"}
        </button>

        {data && <p className="mt-2">{data}</p>}
      </form>
    </div>
  );
}

export default UseActionState;
