import { useState, useEffect } from "react";

export default function TaskPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const taskData = [
            { id: 1, name: "Book venue", completed: false },
            { id: 2, name: "Send invitations", completed: false },
            { id: 3, name: "Arrange catering", completed: false },
            { id: 4, name: "Plan event schedule", completed: false },
            { id: 5, name: "Secure venue", completed: false },
            { id: 6, name: "Book performers", completed: false },
            { id: 7, name: "Prepare speaker lineup", completed: false },
            { id: 8, name: "Arrange tech equipment", completed: true },
            { id: 9, name: "Set up gallery space", completed: false },
            { id: 10, name: "Coordinate with artists", completed: false },
            { id: 11, name: "Plan food vendors", completed: true },
            { id: 12, name: "Organize ticket sales", completed: false },
            { id: 13, name: "Invite authors", completed: false },
            { id: 14, name: "Arrange book signings", completed: false }
        ];
        setTasks(taskData);
        setLoading(false);
    }, []);

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Event Planner - Task Page</h1>
            <p>Manage and track event tasks!</p>

            {loading ? <p>Loading tasks...</p> : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} style={{ listStyle: "none", margin: "10px 0", margin: 10, padding: 10,backgroundColor: "lightGray",borderRadius: 5, display: "flex", justifyContent: "space-between"}}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.id)}
                            />
                            <strong>{task.name}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}