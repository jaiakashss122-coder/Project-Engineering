import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')
  const [taskTitle, setTaskTitle] = useState('')

  const addTask = (title) => {
    if (!title.trim()) return
    const newTask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      
      <div className="task-input-container">
        <input 
          type="text" 
          value={taskTitle} 
          onChange={(e) => setTaskTitle(e.target.value)} 
          placeholder="New task title..."
        />
        <button onClick={() => {
          addTask(taskTitle)
          setTaskTitle('')
        }}>
          Add
        </button>
      </div>

      <div className="task-filters">
        <button 
          className={filter === 'All' ? 'active-filter' : ''} 
          onClick={() => setFilter('All')}
        >All</button>
        <button 
          className={filter === 'Active' ? 'active-filter' : ''} 
          onClick={() => setFilter('Active')}
        >Active</button>
        <button 
          className={filter === 'Completed' ? 'active-filter' : ''} 
          onClick={() => setFilter('Completed')}
        >Completed</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="empty-message">No tasks to display.</p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed-task' : ''}>
              <label>
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)} 
                />
                <span className="task-text">{task.title}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
