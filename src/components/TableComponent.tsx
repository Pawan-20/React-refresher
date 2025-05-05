import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
type TableRow = {
  id: string;
  column1: string;
  column2: string;
  column3: string;
};

type EditableColumn = Exclude<keyof TableRow, "id">;
type TableProps = {
  tableData: { column1: string; column2: string; column3: string }[];
};
const TableComponent = ({ tableData }: TableProps) => {
  const [tableState, setTableState] = useState<TableRow[]>([]);

  const [editMode, setEditMode] = useState<string | null>(null); // Track which row is being edited

  const handleDeleteClick = (id: string) => {
    setTableState((prev) => prev.filter((row) => row.id !== id));
  };

  const handleEditClick = (
    id: string,
    column: EditableColumn,
    value: string
  ) => {
    const newData = [...tableState];
    const row = newData.find((item) => item.id === id);
    if (row) {
      row[column] = value;
    }
    setTableState(newData);
  };

  const toggleEditMode = (id: string) => {
    if (editMode === id) {
      setEditMode(null); // Disable edit mode if the row is already in edit mode
    } else {
      setEditMode(id); // Enable edit mode for the selected row
    }
  };

  useEffect(() => {
    let initialData = tableData.map((data) => {
      return { ...data, id: uuid() };
    });
    setTableState(initialData);
    setEditMode(null);
  }, [tableData]);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="sticky top-0 bg-gray-800 text-white">
          <tr>
            <th className="px-2 py-1">column 1</th>
            <th className="px-2 py-1">column 2</th>
            <th className="px-2 py-1">column 3</th>
            <th className="px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableState.map((row) => (
            <tr key={row.id}>
              <td className="px-2 py-1">
                {editMode === row.id ? (
                  <input
                    value={row.column1}
                    onChange={(e) =>
                      handleEditClick(row.id, "column1", e.target.value)
                    }
                    className="border p-1 rounded w-24"
                  />
                ) : (
                  row.column1
                )}
              </td>
              <td className="px-2 py-1">
                {editMode === row.id ? (
                  <input
                    value={row.column2}
                    onChange={(e) =>
                      handleEditClick(row.id, "column2", e.target.value)
                    }
                    className="border p-1 rounded w-24"
                  />
                ) : (
                  row.column2
                )}
              </td>
              <td className="px-2 py-1">
                {editMode === row.id ? (
                  <input
                    value={row.column3}
                    onChange={(e) =>
                      handleEditClick(row.id, "column3", e.target.value)
                    }
                    className="border p-1 rounded w-24"
                  />
                ) : (
                  row.column3
                )}
              </td>
              <td className="px-2 py-1 flex gap-2">
                <button
                  onClick={() => handleDeleteClick(row.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleEditMode(row.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {editMode === row.id ? "Save" : "Edit"}
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
