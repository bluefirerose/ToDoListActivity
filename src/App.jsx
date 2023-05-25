import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from an API or local storage
    // For simplicity, let's use a static array of tasks
    const initialTasks = [
      { id: 1, text: 'Eat', completed: false },
      { id: 2, text: 'Drink', completed: true },
      { id: 3, text: 'Cook', completed: false },
    ];

    setTasks(initialTasks);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <div className="form-container">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
      
      </div>
    </div>
  );
};

export default App;