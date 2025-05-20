import { useBell } from "./BellContextReducer";

export default function ScienceLab() {
  const { state, dispatch } = useBell();

  return (
    <div className="bg-green-500 p-4 rounded h-[500px]">
      <h2>🧪 Science Lab</h2>
      <p>Bell rings: {state.count}</p>
      <button
        className="bg-green-600 text-white px-3 py-1 mt-2 rounded"
        onClick={() => {
          dispatch({ type: "RING", payload: { room: "Science" } });
        }}
      >
        Ring Science Bell 🔬
      </button>
      <h3 className="mt-4 font-semibold">Log:</h3>
      <ul className="text-sm list-disc pl-4">
        {state.log.map((entry, index) => (
          <li key={index}>
            {entry.room} at {entry.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
