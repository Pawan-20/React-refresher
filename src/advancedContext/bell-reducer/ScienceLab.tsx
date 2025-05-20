import { useBell } from "./BellContextReducer";

export default function ScienceLab() {
  const { bellCount, ringBell } = useBell();

  return (
    <div className="bg-green-500 p-4 rounded h-[500px]">
      <h2>🧪 Science Lab</h2>
      <p>Bell rings: {bellCount}</p>
      <button
        className="bg-green-600 text-white px-3 py-1 mt-2 rounded"
        onClick={ringBell}
      >
        Ring Science Bell 🔬
      </button>
    </div>
  );
}
