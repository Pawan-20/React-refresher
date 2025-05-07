import React, { forwardRef, useImperativeHandle, useState } from "react";
export type handleChild = {
  handleValidation: () => void;
};
const Child4 = forwardRef<handleChild>((props, ref) => {
  const [value, setValue] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useImperativeHandle(ref, () => ({
    handleValidation() {
      if (!value) {
        setErrMsg("Can't be empty baby");
      } else {
        setErrMsg("");
      }
    },
  }));
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
        {errMsg && <div className="text-red-400 text-sm">{errMsg}</div>}
      </form>
    </div>
  );
});

export default Child4;
