/*
BEFORE USING USE HOOK
You must manually handle loading.
Extra state and effect boilerplate.
*/
// import { useEffect, useState } from "react";

// export default function useHook() {
//   const [data, setdata] = useState<any>(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => res.json())
//       .then((data) => setdata(data));
//   }, []);

//   if (!data) return <p>Loading...</p>;

//    return <span> {JSON.stringify(data, null, 2)}</span>;
// }
// import { use } from "react";

// async function getUser() {
//   const res = await fetch("/api/user/1");
//   return res.json();
// }

// export default function UseHook() {
//   const user = use(getUser()); // React suspends until resolved

//   return <h1>Hello, {user.name}</h1>;
// }

import { use } from "react";

const promiseCache = new Map<string, Promise<any>>();

function fetchData(url: string) {
  if (!promiseCache.has(url)) {
    promiseCache.set(
      url,
      fetch(url).then((res) => res.json())
    );
  }
  return promiseCache.get(url)!;
}

export default function UseHook({ url }: { url: string }) {
  const data = use(fetchData(url));
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
