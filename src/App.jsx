import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
import FooterFilter from "./components/FooterFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const tasksLeft = tasks.filter(task => !task.completed).length;
  console.log("tasksLeft", tasksLeft);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const removeCompletedTask = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });
    
   

  return (
    <>
      <Navbar />
      <div></div>
      <div className="">
        <TaskForm addTask={addTask} />
      </div>
      <TaskList
        tasks={filteredTasks}
        completeTask={completeTask}
        removeTask={removeTask}
      />
      <FooterFilter 
      setFilter={setFilter}
      tasksLeft={tasksLeft}
      removeCompletedTask={removeCompletedTask}
      />
    </>
  );
}

export default App;
