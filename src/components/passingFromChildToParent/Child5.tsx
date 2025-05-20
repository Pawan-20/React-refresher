import React, { useEffect, useState } from "react";

type ChildProps = {
  increment: (fn: (data: number) => void) => void;
};

function Child5({ increment }: ChildProps) {
  const [data, setData] = useState<number>(1);

  useEffect(() => {
    increment(() => setData((prev) => prev + 1));
  });

  return <div>Count: {data}</div>;
}

export default Child5;
