import { useState } from "react";


export default function TaskManager() {
    const [tasks, setTasks] = useState([
        // { id: 1, name: "Book venue", completed: false },
        // // { id: 2, name: "Send invitations", completed: false },
        // // { id: 3, name: "Arrange catering", completed: false },
        // // { id: 4, name: "Plan event schedule", completed: false },
        // // { id: 5, name: "Secure venue", completed: false },
        // // { id: 6, name: "Book performers", completed: false },
        // // { id: 7, name: "Prepare speaker lineup", completed: false },
        // // { id: 8, name: "Arrange tech equipment", completed: true },
        // // { id: 9, name: "Set up gallery space", completed: false },
        // // { id: 10, name: "Coordinate with artists", completed: false },
        // // { id: 11, name: "Plan food vendors", completed: true },
        // // { id: 12, name: "Organize ticket sales", completed: false },
        // // { id: 13, name: "Invite authors", completed: false },
        // // { id: 14, name: "Arrange book signings", completed: false }
    ]);
  
    const [newTask, setNewTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
  
    // Function to add a task
    const addTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, { id: Date.now(), task: newTask, completed: false }]);
        setNewTask("");
      }
    };
  
    // Function to delete a task
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  
    // Function to edit a task
    const startEditing = (id, task) => {
      setEditingId(id);
      setEditText(task);
    };
  
    // Function to save an edited task
    const saveTask = (id) => {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, task: editText } : task
      ));
      setEditingId(null);
      setEditText("");
    };
  
    return (
        <div className="task-manager-container">
        <h1>Task Manager</h1>
    
        {/* Add Task Section */}
        <input
            type="text"
            className="task-input"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="task-button" onClick={addTask}>Add Task</button>
    
        {/* Task List */}
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    {editingId === task.id ? (
                        <>
                            <input
                                type="text"
                                className="edit-input"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button className="task-button" onClick={() => saveTask(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span>{task.task}</span>
                            <button className="task-button" onClick={() => startEditing(task.id, task.task)}>Edit</button>
                            <button className="task-button" onClick={() => deleteTask(task.id)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    </div>
    )
}