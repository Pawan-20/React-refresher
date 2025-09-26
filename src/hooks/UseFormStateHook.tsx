// import React, { useRef, useState } from "react";

// const wait = (value: string) => {
//   return new Promise<string>((resolve, reject) => {
//     setTimeout(() => resolve(value), 2000);
//   });
// };
// function UseFormStateHook() {
//   const [list, setList] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const ref = useRef<HTMLInputElement>(null);
//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     if (ref.current) {
//       setLoading(true);
//       const data = await wait(ref.current!.value);
//       setList((prev) => [...prev, data]);
//       setLoading(false);
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input ref={ref} className="border-2 border-black m-2" />
//         <button
//           type="submit"
//           className="p-2 bg-green-500 rounded-xl"
//           disabled={loading}
//         >
//           {loading ? "Loading" : "Submit"}
//         </button>
//       </form>
//       {list.map((ele) => (
//         <li key={ele}>{ele}</li>
//       ))}
//     </div>
//   );
// }

// export default UseFormStateHook;
import React, { useRef, useState } from "react";
import { useFormStatus } from "react-dom"; // ✅ React 18.3+ feature

// Fake async function
const wait = (value: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(value), 2000);
  });
};

function SubmitButton() {
  const { pending } = useFormStatus(); // ✅ auto-tracks form submission
  return (
    <button
      type="submit"
      className="p-2 bg-green-500 rounded-xl"
      disabled={pending}
    >
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}

function UseFormStatusHook() {
  const [list, setList] = useState<string[]>([]);

  const handleSubmit = async (e: FormData) => {
    const getInputValue = e.get("title");
    if (typeof getInputValue !== "string") return;
    const data = await wait(getInputValue);
    setList((prev) => [...prev, data]);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input className="border-2 border-black m-2" name="title" />
        <SubmitButton /> {/* ✅ Separated button using useFormStatus */}
      </form>

      <ul>
        {list.map((ele) => (
          <li key={ele}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseFormStatusHook;
