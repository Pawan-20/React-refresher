import { ReactElement, useState } from "react";
import {
  useGetAnnouncementsQuery,
  useAddAnnouncementMutation,
} from "./AnnouncementSlice";

const Classroom = () => {
  const {
    data,
    error: queryError,
    isLoading,
  } = useGetAnnouncementsQuery(undefined);
  const [
    addAnnouncement,
    { error: mutationError, isLoading: isMutationLoading },
  ] = useAddAnnouncementMutation();
  const [input, setInput] = useState("");

  const handleAdd = async (e: any) => {
    console.log("handleAdd called", e.type); // Debug log
    e.preventDefault();
    e.stopPropagation(); // Extra safety

    if (!input.trim()) {
      console.log("Input is empty, returning early");
      return;
    }

    console.log("About to call mutation with:", input);

    try {
      const result = await addAnnouncement({
        id: crypto.randomUUID(),
        message: input,
        acknowledgedBy: [],
      }).unwrap();

      console.log("Mutation successful:", result);
      setInput("");
    } catch (err) {
      console.error("Failed to add announcement:", err);
    }
  };

  // Helper to render RTK Query errors
  function getErrorMessage(error: any) {
    console.log(error, "error");
    if (!error) return null;
    if ("status" in error) {
      return `Error ${error.status}: ${
        error.error || JSON.stringify(error.data)
      }`;
    }
    return error.message || "Something went wrong";
  }

  return (
    <div className="p-4 min-h-screen bg-amber-50">
      <h2 className="text-xl font-bold mb-4">📢 Announcements</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
        quasi nihil! Natus maxime amet modi excepturi incidunt, iste ullam
        soluta recusandae nostrum ab inventore qui doloribus enim praesentium
        reprehenderit voluptatem consectetur non!
      </p>

      {/* Method 1: Form with onSubmit */}
      <div className="mb-4">
        <form onSubmit={handleAdd}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter announcement (Form method)"
            className="border p-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={isMutationLoading}
          >
            {isMutationLoading ? "Adding..." : "Add (Submit)"}
          </button>
        </form>
      </div>

      {/* Error display */}
      {(queryError || mutationError) && (
        <div className="mb-4 p-2 bg-red-100 border border-red-400">
          <strong>Error:</strong>{" "}
          {getErrorMessage(queryError ? queryError : mutationError)}
        </div>
      )}

      {/* Data display */}
      <div>
        <h3 className="font-semibold mb-2">
          Announcements ({data?.length || 0}):
        </h3>
        {data?.map((a: any) => (
          <div key={a.id} className="border p-2 mb-2">
            <strong>{a.message}</strong> (ID: {a.id})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classroom;
