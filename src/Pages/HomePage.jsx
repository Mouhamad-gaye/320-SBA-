import { useState, useEffect } from "react";

export default function HomePage() {
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {

    const eventData = [
        { id: 1, name: "Music Festival", date: "2025-06-15" },
        { id: 2, name: "Tech Conference", date: "2025-07-10" },
        { id: 3, name: "Art Exhibition", date: "2025-08-05" },
        { id: 4, name: "Food Tasting Event", date: "2025-09-20" },
        { id: 5, name: "Book Fair", date: "2025-10-10" },
        { id: 6, name: "Charity Gala", date: "2025-11-25" },
        { id: 7, name: "Startup Networking", date: "2025-12-05" },
        { id: 8, name: "Photography Workshop", date: "2026-01-12" },
        { id: 9, name: "Fitness Bootcamp", date: "2026-02-20" },
        { id: 10, name: "Comedy Night", date: "2026-03-30" }
      ];
      setEvents(eventData);
      setLoading(false);
  }, []);
    return (
      <div className="event-planner-container">
    <h1>Event Planner</h1>
    <p>Discover and plan events effortlessly!</p>

    {loading ? <p>Loading events...</p> : (
        <ul className="event-list">
            {events.map(event => (
                <li key={event.id} className="event-item">
                    <strong>{event.name}</strong> - <em>{event.date}</em>
                </li>
            ))}
        </ul>
    )}
</div>
    )
}
