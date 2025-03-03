import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, fetchTasks, completeTask }) {
  return tasks.length === 0 ? (
    <p className="task-list d-flex flex-column align-items-center mt-5 text-success text-opacity-50">
      No tasks yet
    </p>
  ) : (
    <ul className="task-list d-flex flex-column align-items-center list-unstyled">
      {tasks.map((task) => (
        <li key={task.id} className="w-100 d-flex justify-content-center">
          <TaskCard
            task={task}
            deleteTask={deleteTask}
            fetchTasks={fetchTasks}
            completeTask={completeTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;