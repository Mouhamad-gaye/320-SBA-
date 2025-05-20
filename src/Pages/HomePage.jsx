import { useState, useEffect } from "react";

export default function HomePage() {
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
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
    }, 2000);
  }, []);
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Event Planner</h1>
        <p>Discover and plan events effortlessly!</p>
  
        {loading ? <p>Loading events...</p> : (
          <ul>
            {events.map(event => (
              <li key={event.id} style={{ listStyle: "none", margin: "10px 0" }}>
                <strong>{event.name}</strong> - <em>{event.date}</em>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}
