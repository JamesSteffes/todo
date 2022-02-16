import { useState } from 'react'
import './index.css';
import Tasks from './components/Tasks'
import Header from './components/Header'
function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "My new Text",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])
  const deleteTask = (id) => {

    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <header className="App-header">
        <Header title="react todo" />
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </header>
    </div>
  );
}

export default App;
