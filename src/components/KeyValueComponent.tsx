import { useState } from "react";

type KeyValue = {
  id: number;
  key: string;
  value: string;
};

export const KeyValueComponent = () => {
  const [keyValueList, setKeyValueList] = useState<KeyValue[]>([
    { id: 1, key: "Name", value: "John Doe" },
    { id: 2, key: "Age", value: "30" },
    { id: 3, key: "Country", value: "USA" },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedKey, setEditedKey] = useState("");
  const [editedValue, setEditedValue] = useState("");

  const handleEditClick = (item: KeyValue) => {
    setEditingId(item.id);
    setEditedKey(item.key);
    setEditedValue(item.value);
  };

  const handleSaveClick = (id: number) => {
    setKeyValueList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, key: editedKey, value: editedValue } : item
      )
    );
    setEditingId(null);
  };

  const handleDeleteClick = (id: number) => {
    setKeyValueList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Key-Value Pairs</h2>

      <div className="flex flex-col gap-4 border-2">
        {keyValueList.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-red-100 rounded shadow flex justify-between items-center"
          >
            {editingId === item.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  className="border p-1 rounded w-1/2"
                  value={editedKey}
                  onChange={(e) => setEditedKey(e.target.value)}
                />
                <input
                  className="border p-1 rounded w-1/2"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
              </div>
            ) : (
              <div className="flex-1 flex gap-2">
                <p className="font-semibold w-1/2">{item.key}</p>
                <p className="w-1/2">{item.value}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              {editingId === item.id ? (
                <button
                  onClick={() => handleSaveClick(item.id)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(item)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDeleteClick(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyValueComponent;
