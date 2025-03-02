import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import FooterFilter from "./components/FooterFilter";
import ThemeToggler from "./components/ThemeToggler";
import { use } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const USER_ID = 42;

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/todos?user_id=' + USER_ID);
      if (!response.ok) {
        if (response.status === 404) {
          setTasks([]);
        } else {
          throw new Error(`Error fetching tasks: ${response.status}`);
        }
      } else {
      const data = await response.json();
      setTasks(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  
  const [filter, setFilter] = useState("all");
  const tasksLeft = tasks.filter((task) => !task.completed).length;
 

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map(
        (task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const removeCompletedTask = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = Array.isArray(tasks) ? tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  }) : [];

  return (
    <>
      <div className="position-relative">
        <div style={{ height: "30vh", backgroundColor: "darkgray" }}></div>
        <div style={{ height: "70vh", backgroundColor: "lightgray" }}></div>
        <div className="position-absolute mx-auto w-100 top-0">
          <Navbar>
            <ThemeToggler />
          </Navbar>

          <div className="">
            <TaskForm addTask={addTask} />
          </div>
          <TaskList
            tasks={filteredTasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
            fetchTasks={fetchTasks}
          />
          <FooterFilter
            setFilter={setFilter}
            tasksLeft={tasksLeft}
            removeCompletedTask={removeCompletedTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
