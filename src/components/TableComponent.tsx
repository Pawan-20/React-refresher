import { useState } from "react";

type TableRow = {
  id: number;
  header1: string;
  header2: string;
  header3: string;
};

type EditableColumn = Exclude<keyof TableRow, "id">;

const TableComponent = () => {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      id: 1,
      header1: "Row 1 - Column 1",
      header2: "Row 1 - Column 2",
      header3: "Row 1 - Column 3",
    },
    {
      id: 2,
      header1: "Row 2 - Column 1",
      header2: "Row 2 - Column 2",
      header3: "Row 2 - Column 3",
    },
    {
      id: 3,
      header1: "Row 3 - Column 1",
      header2: "Row 3 - Column 2",
      header3: "Row 3 - Column 3",
    },
  ]);

  const handleDeleteClick = (id: number) => {
    setTableData((prev) => prev.filter((row) => row.id !== id));
  };

  const handleEditClick = (
    id: number,
    column: EditableColumn,
    value: string
  ) => {
    const newData = [...tableData];
    const row = newData.find((item) => item.id === id);
    if (row) {
      row[column] = value;
    }
    setTableData(newData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="sticky top-0 bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Header 1</th>
            <th className="px-4 py-2">Header 2</th>
            <th className="px-4 py-2">Header 3</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2">
                <input
                  value={row.header1}
                  onChange={(e) =>
                    handleEditClick(row.id, "header1", e.target.value)
                  }
                  className="border p-1 rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  value={row.header2}
                  onChange={(e) =>
                    handleEditClick(row.id, "header2", e.target.value)
                  }
                  className="border p-1 rounded"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  value={row.header3}
                  onChange={(e) =>
                    handleEditClick(row.id, "header3", e.target.value)
                  }
                  className="border p-1 rounded"
                />
              </td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  onClick={() => handleDeleteClick(row.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
