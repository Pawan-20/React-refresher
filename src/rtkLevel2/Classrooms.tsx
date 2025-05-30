import { useDispatch, useSelector } from "react-redux";
import {
  addAnnouncement,
  Announcement,
  clearAllAnnouncements,
  fetchAnnouncements,
  removeAnnouncement,
} from "./AnnouncementSlice";
import { RootState } from "./Store";
import { useEffect } from "react";

function Classrooms() {
  const dispatch = useDispatch();
  const { announcements, loading, error } = useSelector(
    (state: RootState) => state.announcement
  );

  function handleAddAnnouncement() {
    const newAnnouncement = {
      id: (announcements.length + 1).toString(),
      message: "A new announcement",
      acknowledgedBy: ["Nobody yet"],
    };
    dispatch(addAnnouncement(newAnnouncement) as any);
  }
  useEffect(() => {
    dispatch(fetchAnnouncements() as any);
  }, []);
  return (
    <div className="container">
      <div className="p-4">
        <h1 className="text-xl font-bold">🛎️ Classroom</h1>
        {loading && <p>Loading announcements...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <button
          onClick={handleAddAnnouncement}
          className="mt-2 mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Test Announcement
        </button>

        <button
          onClick={() => dispatch(clearAllAnnouncements())}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear All
        </button>
        <ul className="mt-4">
          {announcements.map((ann: Announcement) => (
            <li key={ann.id} className="mb-4 border p-3 rounded shadow-sm">
              <p>{ann.message}</p>
              <p className="text-sm text-gray-500">
                Acknowledged by: {ann.acknowledgedBy.join(", ") || "Nobody yet"}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                  onClick={() => ""}
                >
                  Acknowledge
                </button>
                <button
                  className="px-2 py-1 bg-gray-400 text-white rounded"
                  onClick={() => dispatch(removeAnnouncement({ id: ann.id }))}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Classrooms;
