import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1001, todo: "Task 1", checked: false },
    { id: 1002, todo: "Task 2", checked: false },
    { id: 1003, todo: "Task 3", checked: false },
  ]);
  
  const addTask = (newTask) => {
    console.log("newTask", newTask);
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));

  }
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <TaskForm addTask={addTask}/>
      </div>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
