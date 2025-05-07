import React, { forwardRef, useImperativeHandle, useRef } from "react";
export type ChildHandler = {
  focusOnInput: () => void;
};
const Child3 = forwardRef<ChildHandler>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusOnInput() {
      inputRef.current?.focus();
    },
  }));

  return (
    <div>
      Child3
      <input ref={inputRef} />
    </div>
  );
});

export default Child3;
