import { useEffect, useState } from "react";
import KeyValueComponent from "./components/KeyValueComponent";
import { DescriptionCard } from "./components/DescriptionCard";
import TableComponent from "./components/TableComponent";
import axios from "axios";

// src/types/page.ts
export interface KeyValueDataType {
  [key: string]: string;
}

export interface TableRow {
  column1: string;
  column2: string;
  column3: string;
}

export interface PageDataType {
  pageNumber: number;
  date: string;
  keyValueData: KeyValueDataType;
  tableData: TableRow[];
  description: string;
}

export const DataVerificationPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagesData, setPagesData] = useState<Record<number, PageDataType>>({});
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
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await axios.get<PageDataType[]>(
          "http://localhost:3001/pages"
        );
        const dataMap: Record<number, PageDataType> = {};
        res.data.forEach((page) => {
          dataMap[page.pageNumber] = page;
        });
        setPagesData(dataMap);
      } catch (err) {
        console.error("Error fetching pages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      {/* Top Section */}
      <div className="text-center mb-6 border-2 bg-black">
        {!loading ? (
          <div>Loading</div>
        ) : (
          <>
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
          </>
        )}
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
