function TodoForm() {
    const [task, setTask] = useState('');
    const [checked, setChecked] = useState(false);

    const handleTodoInput = (e) => {
      setTask(e.target.value);
    };

    const handleCheckboxChange = (e) => {
      setChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newTodo = { todo, checked };
      setTasks([...todos, newTodo]);
      setTask('');
      setChecked(false);
    
   

  return (
    <form className="z-1 d-flex flex-row p-3 mt-5 border border-2 rounded-2 align-items-center gap-2 shadow">
      <div className="checkbox">
        <input type="checkbox" className="form-check-input" />
      </div>
      <div className="form-floating mb3 col-9">
        <input
          type="text"
          className="form-control"
          id="todo-title"
          placeholder="Add a todo"
        />
        <label htmlFor="todo-title">Add a todo</label>
      </div>
      <button className="btn btn-success btn-sm col-xl-1">Add</button>
      <button type="button" class="btn-add" aria-label="Close"></button>

    </form>
  );
}

export default TodoForm;
