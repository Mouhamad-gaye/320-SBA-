import { useState } from "react";
import '../App.css'

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", location: "" });

  // Handle form input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Add event to list
  const addEvent = () => {
    if (newEvent.name && newEvent.date && newEvent.location) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ name: "", date: "", location: "" }); // Clear form
    }
  };


  return (
    <div className="event-planner-container">
      <h1>Plan Your Own Event</h1>

      {/* Event Creation Form */}
      <div className="event-form">
        <input type="text" name="name" placeholder="Event Name" value={newEvent.name} onChange={handleChange} />
        <input type="date" name="date" value={newEvent.date} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} />
        <button onClick={addEvent}>Create Event</button>
      </div>

      {/* Display Created Events */}
      <h2>Your Events</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <strong>{event.name}</strong> - <em>{event.date}</em> at {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}













