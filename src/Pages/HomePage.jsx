import { useState, useEffect } from "react";
import axios from "axios";


export default function HomePage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    let apiKey = "5LY5NNRPZ3AGBNFXFYUS"
    let apiUrl = `https://www.eventbriteapi.com/v3/users/me/?token=5LY5NNRPZ3AGBNFXFYUS`

   
        useEffect(() => {
            const fetchEvents = async () => {
                try {
                    const response = await axios.get(apiUrl);
                    setEvents(response.data); // Assuming response contains event data
                } catch (error) {
                    console.error("Error fetching events:", error);
                } finally {
                    setLoading(true);
                }
            };
    
            fetchEvents();
        }, []);
    return (
        <div className="event-planner-container">
            <h1>Event Planner</h1>
            <p>Discover and plan events effortlessly!</p>

            {loading ? <p>Loading events...</p> : (
                <ul className="event-list">
                    {events.map(event => (
                        <li key={event.id} className="event-item">
                            <strong>{event.name}</strong>
                            <em>{}</em>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
