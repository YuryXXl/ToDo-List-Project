import TaskCard from "./TaskCard";

function TaskList({ tasks, removeTask, completeTask }) {
  return tasks.length < 1 ? (
    <ul className="task-list d-flex flex-column align-items-center mt-5 text-success text-opacity-50">
      No tasks yet
    </ul>
  ) : (
    <li className="task-list d-flex flex-column align-items-center">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          removeTask={removeTask}
          completeTask={completeTask}
          onClick={() => completeTask(task.comleted)}
        />
      ))}
    </li>
  );
}

export default TaskList;
