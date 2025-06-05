// Child.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./new-store";
import { acknowledgeAnnouncement } from "./StudentSlice";
import { fetchPaginatedAnnouncements } from "./AnnouncementSlice";

export default function BiologyLab() {
  const dispatch = useDispatch();

  // 🛎️ Get all announcements from the bell slice
  const announcements = useSelector(
    (state: RootState) => state.bell.announcements
  );
  const { announcements: dataFromApi, status } = useSelector(
    (state: RootState) => state.announcement
  );

  console.log(status, "status");

  // 🧒 Get acknowledged announcements from the student slice
  const acknowledged = useSelector(
    (state: RootState) => state.student.acknowledged
  );

  const handleAcknowledge = (id: string) => {
    dispatch(acknowledgeAnnouncement({ student: "Alice", announcementId: id }));
  };

  useEffect(() => {
    dispatch(fetchPaginatedAnnouncements({ page: 1, limit: 2 }) as any);
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">📢 Announcements</h2>
      <ul>
        {announcements.map((a) => (
          <li key={a.id} className="mb-2 border p-2 rounded">
            <div>
              <strong>{a.message}</strong> <br />
              <small>{new Date(a.timestamp).toLocaleString()}</small>
            </div>
            <button
              className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
              onClick={() => handleAcknowledge(a.id)}
              disabled={acknowledged.some(
                (ack) => ack.student === "Alice" && ack.announcementId === a.id
              )}
            >
              {acknowledged.some(
                (ack) => ack.student === "Alice" && ack.announcementId === a.id
              )
                ? "✅ Acknowledged"
                : "Acknowledge"}
            </button>
          </li>
        ))}
      </ul>
      <hr></hr>
      {status == "idle" ? (
        <h1 className="text-red-600">Loading....</h1>
      ) : (
        <h3 className="bg-grey-200 border border-b-cyan-800">
          {JSON.stringify(dataFromApi)}
        </h3>
      )}
    </div>
  );
}
