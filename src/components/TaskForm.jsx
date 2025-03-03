import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const USER_ID = 42;

  const handleTaskInput = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      title: title.trim(),
      completed: false,
      user_id: USER_ID,
    };

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const savedTask = await response.json();
      addTask(savedTask);
      setTitle("");
    } catch (e) {
      console.error("Failed to create task:", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light mb-2 col-8 p-3 border border-2 rounded-2 mx-auto mt-2 d-flex justify-content-between align-items-center col-lg-4"
    >
      {/* <div className="form-check">
//           <input
//             onChange={handleCheckboxInput}
//             className="form-check-input"
//             type="checkbox"
//             value={false}
//           />
//         </div> */}
      <input
        className="form-control"
        type="text"
        value={title}
        onChange={handleTaskInput}
        placeholder="Create a new task"
        style={{ color: "green", opacity: "0.5" }}
        id="taskInput"
      />

      <button
        type="submit"
        className="bg-transparent border-0 text-success text-opacity-75"
        style={{ marginLeft: "2rem" }}
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default TaskForm;
