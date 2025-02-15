import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import TaskFooter from "./TaskFooter";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    console.log("newTask", newTask);
    setTasks((prev) => [...prev, newTask]);
  };
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };



  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <TaskForm addTask={addTask} />
      </div>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <TaskFooter />
    </>
  );
}

export default App;
