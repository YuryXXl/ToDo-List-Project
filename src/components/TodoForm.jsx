

function TodoForm() {
  return (
    <form className="z-1 d-flex flex-row p-3 border border-2 rounded-2 align-items-center gap-2 shadow">
       <div className="checkbox">
        <input type="checkbox" className="form-check-input" />
       </div>
       <div className="form-floating mb3 col-9">
        <input type="text" className="form-control" id="todo-title" placeholder="Add a todo" />
        <label htmlFor="todo-title">Add a todo</label>
       </div>
       <button className="btn btn-success btn-sm col-2">Add</button>
    </form>
  )
}

export default TodoForm
