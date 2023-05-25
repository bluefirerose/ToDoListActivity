import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <p>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </p>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoList;