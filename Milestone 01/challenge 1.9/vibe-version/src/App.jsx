import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title: inputValue.trim(),
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">Add</button>
      </div>

      <div className="filters">
        <button 
          className={filter === 'All' ? 'active-filter' : ''} 
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button 
          className={filter === 'Active' ? 'active-filter' : ''} 
          onClick={() => setFilter('Active')}
        >
          Active
        </button>
        <button 
          className={filter === 'Completed' ? 'active-filter' : ''} 
          onClick={() => setFilter('Completed')}
        >
          Completed
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-title">{task.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
