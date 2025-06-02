import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAnnouncements,
  acknowledgeAnnouncement,
  announcementSelectors,
  announcementActions,
} from "./AnnouncementSlice";
import { selectUnacknowledgedAnnouncements } from "./selector";
import { RootState } from "./store";

const Classrooms = () => {
  const dispatch = useDispatch();
  const all = useSelector((state: RootState) =>
    announcementSelectors.selectAll(state)
  );
  const unacknowledged = useSelector(selectUnacknowledgedAnnouncements);

  useEffect(() => {
    dispatch(fetchAnnouncements() as any);
  }, [dispatch]);

  const handleAcknowledge = (id: number) => {
    dispatch(acknowledgeAnnouncement({ id, user: "Alice" }) as any);
  };

  const handleManualAdd = () => {
    dispatch(
      announcementActions.addAnnouncementManually({
        id: Date.now(),
        message: "Surprise quiz tomorrow!",
        acknowledgedBy: [],
      })
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">📢 Announcements</h1>
      {all.map((a) => (
        <div key={a.id} className="border p-2 mb-2 rounded">
          <p>{a.message}</p>
          <p className="text-sm text-gray-500">
            Acknowledged by: {a.acknowledgedBy.join(", ") || "No one"}
          </p>
          <button
            onClick={() => handleAcknowledge(a.id)}
            className="mt-1 px-2 py-1 bg-blue-500 text-white rounded"
          >
            Acknowledge as Alice
          </button>
        </div>
      ))}
      <button
        onClick={handleManualAdd}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        ➕ Add Manual Announcement
      </button>
      <div className="mt-4 text-sm">
        🔍 Unacknowledged:
        <ul>
          {unacknowledged.map((a) => (
            <li key={a.id}>{a.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Classrooms;
