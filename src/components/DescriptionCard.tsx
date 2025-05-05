import { useEffect, useState } from "react";

type DescriptionCardType = {
  currentPageDescription: string;
  onDataChange: (updatedSection: "description", updatedValue: string) => void;
};
export const DescriptionCard = ({
  currentPageDescription,
  onDataChange,
}: DescriptionCardType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(currentPageDescription);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onDataChange("description", description);
    // You can also send updated data to parent later
    console.log("Saved description:", description);
  };

  useEffect(() => {
    setDescription(currentPageDescription);
    setIsEditing(false);
  }, [currentPageDescription]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4 text-center">Description</h2>

      {/* Main Content */}
      <div className="flex-1">
        {isEditing ? (
          <textarea
            className="w-full h-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="text-gray-700">{description}</p>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-4 text-right">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
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
