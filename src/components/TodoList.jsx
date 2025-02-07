import { useState } from "react"
import TodoCard from "./TodoCard";


function TodoList() {
    const [todos, setTodos] = useState([
       { 
        id: 1001,
        title: "Learn React",
        checked: false
        },
        {
            id: 1002,
            title: "Learn English",
            checked: false
        },
        {
            id: 1003,
            title: "Learn Python",
            checked: true
        },
    ]);
  return (
    <div className="todo-list d-flex flex-column gap-3 align-items-center mt-5">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo}/>
      ))}
    </div>
    
  )
}

export default TodoList

