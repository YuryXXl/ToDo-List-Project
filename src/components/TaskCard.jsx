import { IoTrashSharp } from "react-icons/io5";

function TaskCard({ task, completeTask, fetchTasks }) {
  const USER_ID = 42;

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/todos/${taskId}?user_id=${USER_ID}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      fetchTasks();
    } catch (e) {
      console.error("Failed to delete task:", e);
    }
  };

  return (
    <div className="bg-light col-8 rounded-2 col-lg-4">
      <div className="card">
        <div className="card-body d-flex justify-content-between ">
          <div className="d-flex align-items-center gap-1">
            <div className="form-check">
              <label htmlFor={`taskCheck-${task.id}`}></label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
                id={`taskCheck-${task.id}`}
              />
            </div>
            <h5
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className="card-title m-0 text-success text-opacity-75"
            >
              {task.title}
            </h5>
            <p className="text small card-text m-0 text-success text-opacity-50">
              {task.created_at}
            </p>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-danger btn"
          >
            <IoTrashSharp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
