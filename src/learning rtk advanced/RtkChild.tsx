import { useState } from "react";
import {
  useGetAnnouncementsQuery,
  useAddAnnouncementMutation,
} from "./AnnouncementSlice";

const Classroom = () => {
  const { data, error, isLoading } = useGetAnnouncementsQuery(undefined);
  const [addAnnouncement] = useAddAnnouncementMutation(); // 👈 Setup mutation hook
  const [input, setInput] = useState("");

  const handleAdd = async () => {
    if (!input.trim()) return;

    try {
      await addAnnouncement({ message: input }).unwrap(); // 👈 Call API
      setInput("");
    } catch (err) {
      console.error("Failed to add announcement:", err);
    }
  };

  if (isLoading) return <p>Loading 🌀...</p>;
  if (error) return <p>Something went wrong ❌</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📢 Announcements</h2>

      <div className="mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter announcement"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {data?.map((a: any) => (
        <div key={a.id} className="border p-2 mb-2">
          <strong>{a.message}</strong>
        </div>
      ))}
    </div>
  );
};

export default Classroom;
