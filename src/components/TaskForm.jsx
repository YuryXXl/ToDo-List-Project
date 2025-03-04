import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };

  const handleCheckboxInput = (e) => {
    setChecked(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      todo: task.trim(),
      completed: false,
      date: new Date().toLocaleString("en-US"),
    };

    addTask(newTask);

    console.log("new Task created", newTask);

    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light mb-2 col-8 p-3 border border-2 rounded-2 mx-auto mt-2 d-flex justify-content-between align-items-center col-lg-4"
     
    >
      <div className="d-flex align-items-center gap-2">
        <div className="form-check">
          <input
            onChange={handleCheckboxInput}
            className="form-check-input"
            type="checkbox"
            value={false}
          />
        </div>
        <div className="form-floating">
          <input
            onChange={handleTaskInput}
            type="text"
            value={task}
            className="form-control text-success text-opacity-50"
            id="task-title "
            placeholder="Add a task"
          />
          <label htmlFor="task-title" className="text-success text-opacity-50">
            Create a new task
          </label>
        </div>
      </div>

      <div className="p-2">
        <FaPlus
          type="submit"
          onClick={handleSubmit}
          className="text-success text-opacity-75"
        />
      </div>
    </form>
  );
}

export default TaskForm;
