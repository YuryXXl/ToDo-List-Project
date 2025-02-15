
import TaskCard from "./TaskCard";

function TaskList({tasks}) {
  return (
    <div className="task-list d-flex flex-column gap-2 align-items-center mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}

export default TaskList;
