import { useEffect, useState } from "react";

function getInitialValue(key: string, initialValue: string): string {
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null) {
    return JSON.parse(savedValue);
  }
  return initialValue;
}

function useCustomHook(
  key: string,
  initialValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState<string>(() =>
    getInitialValue(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

//another custom simple hook
function useDebugHook(value: any) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export { useCustomHook, useDebugHook };
