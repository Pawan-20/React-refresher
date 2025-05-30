// Classroom.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnnouncements,
  acknowledgeAnnouncement,
  addAnnouncement,
  removeAnnouncement,
  clearAllAnnouncements,
} from "./AnnouncementSlice";
import { RootState } from "./Store";

export default function Classroom() {
  const dispatch = useDispatch();
  const { announcements, loading, error } = useSelector(
    (state: RootState) => state.announcements
  );

  useEffect(() => {
    dispatch(fetchAnnouncements() as any);
  }, [dispatch]);

  const handleAcknowledge = (id: number) => {
    dispatch(acknowledgeAnnouncement({ id, user: "Alice" }) as any);
  };

  const handleAdd = () => {
    const newAnnouncement = {
      id: Math.floor(Math.random() * 10000),
      message: "Surprise test tomorrow!",
      acknowledgedBy: [],
    };
    dispatch(addAnnouncement(newAnnouncement));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">🛎️ Classroom</h1>
      {loading && <p>Loading announcements...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handleAdd}
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
        {announcements.map((ann) => (
          <li key={ann.id} className="mb-4 border p-3 rounded shadow-sm">
            <p>{ann.message}</p>
            <p className="text-sm text-gray-500">
              Acknowledged by: {ann.acknowledgedBy.join(", ") || "Nobody yet"}
            </p>
            <div className="mt-2 flex gap-2">
              <button
                className="px-2 py-1 bg-blue-500 text-white rounded"
                onClick={() => handleAcknowledge(ann.id)}
              >
                Acknowledge
              </button>
              <button
                className="px-2 py-1 bg-gray-400 text-white rounded"
                onClick={() => dispatch(removeAnnouncement(ann.id))}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
