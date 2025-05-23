
# Event Management App circuit

My project is an Event Planner that allows users to create and plan their events. Events can be anything from weddings, concerts, parties, work and/or school deadlines, todo lists, and much more. This application is incredibly flexible and designed to keep the user organized, by allowing them to create a deadline, that initiates a countdown to that event in real-time. In addition, once a user creates an event, they will have the option to create tasks that allows them to prepare for the event. Once the user creates a task another countdown begins. This countdown, however, is for each task that is created. So if you have only so much time to get a certain task done, such as ordering flowers for a wedding or a cake for a party, this can come in very handy. The application becomes more like a virtual assistant.

* App might have event sharing with others or via social media.

## Capabilties 
.About Page
    .Desc of what the app can do
. HomePage (Landing)
    .Create events
. Tasks Assignments
    . Add task
    . Edit task
    . Update task
    . Delete task
. Budget Management
    . Event venue price
    . Event food price
    . Event maetrial price
. Event Design
    . Event Agendas
    . Events layouts
    . Plan Venue management


### Data Model
. Event Name
. Event Date
. Event Time
. Task {task desc, final achievement, Deadline}
. Budget {items price, venue price}
. Team List
. Event Organization sections 

#### React App Layout

Pages: 

Landing Page/ Homepage (Will show all routes)
Authentication Page (Login form, registration form)

Task Page: 
    . Task List
    . Due Dates
    . Status
    . Notes
    . Assignee

Budget Page
    . Items needed for the event
    . Venue price

Event Design
    . Event agendas
    . Events layouts
    . Plan venue management

About Page

404 Page not found

##### Components

. Nav Bar



I started my application with creating my react app via the terminal with npm create vite@latest . with all its installations (npm i, npm i react-router-dom).

Set up all my pages and components necessary for my project. I have all my page routes on the page folder and my Nav bar on the components folder. I have a total of 6 pages meaning six routes. 

On my App.jsx folder, I set up my routes and import all the pages and the Routes, and Route which defines the paths. 

Once I was done with all the setups, I proceeded and build my homepage which is the landing page that the user will open up and create their events they want to manage. 

HomePage Code
(I only use useState to stores data
On my first useState (events), it sotres all created events, on empty array initialiazer
The second usestate (newEvent), it sotres the input details.
I created a handleChange function to handle the inputs. the setNewEvent updates the input fields dynamically. e.target.name ensures the correct field is updated.
I also create an addEvent function for user to their events they want to manage. on this function if the user inputs their event name, date and location, then the setEvents will create a unique ID and add the event in the Array
The setNewEvent will clear the input fields after adding new event.
UI RENDERING 
We have the title, and create a div for the input form. Used the handleChange function to updat the input dynamically. The button triggers addEvent to add the event to the list.
Also looped through events array using .map to render created events. Events are wrapped in <li> and displays the event name, date and location.
)

Task Manager Code
(In the task manager page, i add tasks, edit tasks, delete tasks with one click, store takss in local component state using useState.

The tasks useState holds all the tasks objects(id, name, completetd. The newTask stores the value from the add task input, the editID track the task being edited, the editText stores the temporary edited text.) 
Add new task function checks if the newTask input is not just empty spaces, then adding a new task to the tasks state with an id based on the current timestamp (Date.now. Creates a unique ID. The setNewTask clears the input after adding a task.  
The statrtEditing function stores the id of the taks being edited and prefills the input with the current task name.
The save Task function finds the task in the array (task.id === id), updates the task name while keeping other properties unchanged(...task, clears edit mode 
The deleteTask function filters out the task with matching id and creates a new array without the deleted tasks(setTasks() 

Displaying the task list using .map, checks if the current task is being edited, and also provides and edit and delete button for each task.
The ternary operator mentions if the condition is true, it renders the edit form (inputs + save button) else if the condition is false, it would typically display the dafutl view (the task and edit/delete buttons.))
 


