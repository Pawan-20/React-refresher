import React, { useState } from "react";

function LearnPage() {
  const [data, setData] = useState([
    { id: 1, key: "hello", value: "value" },
    { id: 2, key: "hello2", value: "value2" },
    { id: 3, key: "hello3", value: "value3" },
  ]);
  const [editedKey, setEditedKey] = useState<string>("");
  const [editedValue, setEditedValue] = useState("");

  const [editingid, setEditingid] = useState<number>(100);
  function handleClick(e: any) {
    setEditingid(e.id);
    setEditedKey(e.key);
    setEditedValue(e.value);
  }
  function handleSave() {
    let newData = data.map((item) => {
      if (item.id == editingid) {
        return { id: item.id, key: editedKey, value: editedValue };
      } else return item;
    });

    setData(newData);
    setEditingid(0);
  }
  return (
    <div className="h-screen bg-pink-200">
      {data.map((obj, key) => (
        <div className="border-amber-200 border-l-2 p-2">
          {editingid == obj.id ? (
            <div className=" flex flex-1 gap-4">
              <input
                value={editedKey}
                onChange={(e) => {
                  setEditedKey(e.target.value);
                }}
              />
              <input
                value={editedValue}
                onChange={(e) => {
                  setEditedValue(e.target.value);
                }}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <div className="flex flex-1 gap-4">
              <span> {obj.key}</span>
              <div>{obj.value}</div>
              <button
                onClick={() => {
                  handleClick(obj);
                }}
                className="bg-blue-300 rounded w-8 h-6"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LearnPage;
