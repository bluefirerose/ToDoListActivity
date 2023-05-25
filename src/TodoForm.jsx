import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      addTask(newTask);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TodoForm;