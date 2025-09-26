import React, { forwardRef, useImperativeHandle, useRef } from "react";

type ChildHandle = {
  clear: () => void;
  focus: () => void;
};

const Child = forwardRef<ChildHandle>((props, ref) => {
  const inputref = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    clear: () => {
      if (inputref.current) {
        inputref.current.value = "";
      }
    },
    focus: () => {
      inputref.current && inputref.current.focus();
    },
  }));
  return (
    <div>
      <input ref={inputref} />
    </div>
  );
});

function UseImperativeHandle() {
  const ref = useRef<ChildHandle>(null);
  return (
    <div>
      <Child ref={ref} />
      <button
        className="p-2 border-amber-200 rounded bg-green-100"
        onClick={() => ref.current?.focus()}
      >
        Focus Input
      </button>
      <button
        className="p-2 border-amber-200 rounded bg-green-100"
        onClick={() => ref.current?.clear()}
      >
        Clear Input
      </button>
    </div>
  );
}
export default UseImperativeHandle;
