import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
type KeyValue = {
  id: string;
  key: string;
  value: string;
};
type KeyValueProps = {
  keyValueData: Record<string, string>;
};

export const KeyValueComponent = ({ keyValueData }: KeyValueProps) => {
  const [keyValueList, setKeyValueList] = useState<KeyValue[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedKey, setEditedKey] = useState("");
  const [editedValue, setEditedValue] = useState("");

  const handleEditClick = (item: KeyValue) => {
    setEditingId(item.id);
    setEditedKey(item.key);
    setEditedValue(item.value);
  };

  const handleSaveClick = (id: string) => {
    const newList = keyValueList.map((item) =>
      item.id === id ? { ...item, key: editedKey, value: editedValue } : item
    );
    setKeyValueList(newList);
    setEditingId(null);
  };

  const handleDeleteClick = (id: string) => {
    setKeyValueList((prev) => prev.filter((item) => item.id !== id));
  };
  useEffect(() => {
    let initialList = Object.entries(keyValueData).map(([key, value]) => ({
      id: uuid(),
      key,
      value,
    }));
    setKeyValueList(initialList);
    setEditingId(null);
  }, [keyValueData]);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Key-Value Pairs</h2>

      <div className="flex-1 overflow-auto flex flex-col gap-4 border-2 ">
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
