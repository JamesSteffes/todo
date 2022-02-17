import { useState } from 'react'
import './index.css';
import Tasks from './components/Tasks'
import Header from './components/Header'
import Addtask from './Addtask';
function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "My new Text",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    }
  ])
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <div className="container">
      <header className="App-header">
        <Header title="Task Tracker" />
        <Addtask />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks"}
      </header>
    </div>
  );
}

export default App;
