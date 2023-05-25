import PropTypes from 'prop-types';

const TodoItem = ({ task, completeTask, deleteTask }) => {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li className="m-5">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.text}
      </span>
      <button onClick={handleComplete}>
        {task.completed ? 'Incomplete' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
