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
      header1: "R1 C1",
      header2: "R1 C2",
      header3: "R1 C3",
    },
    {
      id: 2,
      header1: "R2 C1",
      header2: "R2 C2",
      header3: "R2 C3",
    },
    {
      id: 3,
      header1: "R3 C1",
      header2: "R3 C2",
      header3: "R3 C3",
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
            <th className="px-2 py-1">Header 1</th>
            <th className="px-2 py-1">Header 2</th>
            <th className="px-2 py-1">Header 3</th>
            <th className="px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className="px-2 py-1">
                <input
                  value={row.header1}
                  onChange={(e) =>
                    handleEditClick(row.id, "header1", e.target.value)
                  }
                  className="border p-1 rounded w-24"
                />
              </td>
              <td className="px-2 py-1">
                <input
                  value={row.header2}
                  onChange={(e) =>
                    handleEditClick(row.id, "header2", e.target.value)
                  }
                  className="border p-1 rounded w-24"
                />
              </td>
              <td className="px-2 py-1">
                <input
                  value={row.header3}
                  onChange={(e) =>
                    handleEditClick(row.id, "header3", e.target.value)
                  }
                  className="border p-1 rounded w-24"
                />
              </td>
              <td className="px-2 py-1 flex gap-2">
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
