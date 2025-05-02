/* with Use Ref */
import { useRef, useState } from "react";

export const DescriptionCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(
    "This is a sample description text."
  );
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (textareaRef.current) {
      setDescription(textareaRef.current.value);
    }
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4 text-center">Description</h2>

      <div className="flex-1">
        {isEditing ? (
          <textarea
            ref={textareaRef}
            defaultValue={description}
            className="w-full h-full p-2 border rounded"
          />
        ) : (
          <p className="text-gray-700">{description}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-4 text-right">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default DescriptionCard;

/* with cancel feature : 
import { useState } from "react";

const DescriptionCard = () => {
  const [description, setDescription] = useState("Hello I am a description");
  const [tempDescription, setTempDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setTempDescription(description);
    setIsEditing(true);
  };

  const handleSave = () => {
    setDescription(tempDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempDescription(description); // discard edits
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col h-full border p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-center">Description</h2>

      <div className="flex-1">
        {isEditing ? (
          <textarea
            className="w-full border rounded p-2"
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
          />
        ) : (
          <div className="p-2">{description}</div>
        )}
      </div>

      <div className="mt-4 text-right space-x-2">
        {isEditing ? (
          <>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default DescriptionCard;
*/
