import { Link } from "react-router-dom"
import styles from './Nav.module.css'



export default function NavBar() {
    return (
        <nav>
        <ul className="nav-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/taskedit">Task Manager</Link></li>
            <li><Link to="/budget">Budgeting</Link></li>
            <li><Link to="design">Event Design</Link></li>
        </ul>
    </nav>
    )
}

//   useEffect(() => {
//     const fetchEvents = async () => {
//         try {
//             const response = await axios.get(`https://www.eventbriteapi.com/v3/users/me/?token=5LY5NNRPZ3AGBNFXFYUS`);
//             setEvents(response.data); // Assuming response contains event data
//         } catch (error) {
//             console.error("Error fetching events:", error);
//         } finally {
//             setNewEvent(false);
//         }
//     };

//     fetchEvents();
// }, []);


