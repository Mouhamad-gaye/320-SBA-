import { useState, useEffect } from "react";
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

    //   useEffect(() => {
  //     async function fetchTasks() {
  //         try {
  //             const response = await fetch("");
  //             const data = await response.json();
  //             setTasks(data);
  //         } catch (error) {
  //             console.error("Error fetching tasks:", error);
  //         }
  //     }
  //     fetchTasks();
  // }, []);


    return (
        <div className="event-planner-container">
            <h1>Plan Your Own Event</h1>

            {/* Event Creation Form */}
            <div className="event-form">
                <input onChange={handleChange} type="text" name="name" placeholder="Event Name" value={newEvent.name} />
                <input onChange={handleChange} type="date" name="date" value={newEvent.date} />
                <input onChange={handleChange} type="text" name="location" placeholder="Location" value={newEvent.location} />
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













