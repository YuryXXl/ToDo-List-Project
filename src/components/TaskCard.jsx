import { IoTrashSharp } from "react-icons/io5";
import { useState } from "react";

function TaskCard({ task, removeTask, completeTask }) {
  // const [isStrike, setIsStrike] = useState(false);

  return (
    <div className="bg-light col-8 rounded-2 col-lg-4">
      <div className="card">
        <div className="card-body d-flex justify-content-between ">
          <div className="d-flex align-items-center gap-1">
            <div className="form-check">
              <label htmlFor="exampleCheck1"></label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
                
              />
            </div>
            <h5
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            
              className="card-title m-0 text-success text-opacity-75"
            >
              {task.title}
            </h5>
            <p className="text small card-text m-0 text-success text-opacity-50">
              {task.created_at}
            </p>
          </div>
          <button
            onClick={() => removeTask(task.id)}
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
