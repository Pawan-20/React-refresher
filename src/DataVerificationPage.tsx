import { useState } from "react";
import KeyValueComponent from "./components/KeyValueComponent";
import { DescriptionCard } from "./components/DescriptionCard";
import TableComponent from "./components/TableComponent";

export const DataVerificationPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };

  function handlePrev() {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
  }
  const handleSave = () => {
    console.log("Saving data...");
    // Here later we'll call API
  };

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      {/* Top Section */}
      <div className="text-center mb-6 border-2">
        <h1 className="text-2xl font-bold">Page {pageNumber}</h1>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-1 gap-6">
        {/* Left Column */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-auto">
          <KeyValueComponent />
        </div>

        {/* Middle Column */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-auto">
          <DescriptionCard />
        </div>

        {/* Right Column */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-auto">
          <TableComponent />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-6">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};
