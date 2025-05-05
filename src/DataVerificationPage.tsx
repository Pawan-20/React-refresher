import { useEffect, useState } from "react";
import KeyValueComponent from "./components/KeyValueComponent";
import { DescriptionCard } from "./components/DescriptionCard";
import TableComponent from "./components/TableComponent";
import axios from "axios";

import { PageDataType } from "./types/page";
// src/types/page.ts

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
  const currentPageData = pagesData[pageNumber];
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!currentPageData)
    return <p className="text-center mt-10">No data for this page.</p>;

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100 ">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Page {pageNumber}</h1>
        <div className="mt-2 flex justify-center gap-4">
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

      {/* Middle Section - Takes remaining height */}
      <div className="flex flex-1 gap-6 overflow-hidden">
        {/* Each Column is scrollable inside */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-y-auto">
          <KeyValueComponent keyValueData={currentPageData.keyValueData} />
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-y-auto">
          <DescriptionCard
            currentPageDescription={currentPageData.description}
          />
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-y-auto">
          <TableComponent tableData={currentPageData.tableData} />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
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
