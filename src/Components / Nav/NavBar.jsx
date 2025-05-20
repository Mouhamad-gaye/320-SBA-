import { Link } from "react-router-dom"
import styles from './Nav.module.css'



export default function NavBar() {
    return (
        <nav>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: "space-between", color: 'tomato'}}>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/task">Tasks</Link>
                </li>

                <li>
                    <Link to="/budget">Budgeting</Link>
                </li>

                <li>
                    <Link to="design">Event Design</Link>
                </li>

            </ul>
        </nav>
    )
}

