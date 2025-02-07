import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
// import TaskList from "./components/TaskList.jsx";
// import TodoCard from "./components/TodoCard.jsx";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <div className="col-6 mx-auto mt-2">
        <TodoForm />
      </div>
    
      <TodoList />
      {/* <TodoCard /> */}
      {/* <TaskList /> */}
     
    </>
  );
}

export default App;
