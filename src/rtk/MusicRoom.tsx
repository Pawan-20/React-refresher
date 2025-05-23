import { useDispatch, useSelector } from "react-redux";
import { ring } from "./BellSlice";
import { RootState } from "./Store";

export default function MusicRoom() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.bell.count);
  const log = useSelector((state: RootState) => state.bell.log);

  return (
    <div className="p-4 bg-green-100 rounded">
      <h2>🧪 Science Lab</h2>
      <p>Bell rings: {count}</p>
      <button
        onClick={() => dispatch(ring({ room: "Science" }))}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Ring Science Bell
      </button>
      <h3 className="mt-4">Log:</h3>
      <ul className="list-disc pl-5 text-sm">
        {log.map((entry, i) => (
          <li key={i}>
            {entry.room} at {entry.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
