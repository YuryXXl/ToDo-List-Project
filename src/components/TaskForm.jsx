import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [checked, setChecked] = useState("");

  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };

  const handleCheckboxInput = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      todo: task,
      checked: checked,
    };

    addTask(newTask);

    console.log("new Task created", newTask);

    setTask("");
    setChecked("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-8 p-3 border border-2 rounded-2 mx-auto mt-2 d-flex justify-content-between align-items-center shadow col-lg-4"
    >
      <div className="d-flex align-items-center gap-2">
        <div className="form-check">
          <input
            onChange={handleCheckboxInput}
            className="form-check-input"
            type="checkbox"
            value={checked}
        
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
          <label htmlFor="task-title" className="text-success text-opacity-75">Create a new task</label>
        </div>
      </div>

      <div className="">
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
