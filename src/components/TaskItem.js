const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
