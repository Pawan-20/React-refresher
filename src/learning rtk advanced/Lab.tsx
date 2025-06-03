import { useSelector } from "react-redux";

export default function Lab() {
  const allAnnouncements = useSelector(
    (state: any) => state.announcements.announcement
  );

  return (
    <>
      <h2>All Announcements:</h2>
      {allAnnouncements.map((a: any) => (
        <p key={a.id}>
          {a.message} - Acknowledged by: {a.acknowledgedBy.join(", ")}
        </p>
      ))}
    </>
  );
}
