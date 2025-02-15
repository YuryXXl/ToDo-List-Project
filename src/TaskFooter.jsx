



function TaskFooter(taskLeft, taskAll, taskActive, taskCompleted, clearCompleted) {
    

    

    



//   console.log("tasks", tasks);
//   const length = tasks.length;

//   const taskAll = length;

//   const taskActive = tasks.filter((task) => task.checked === false);

//   const taskCompleted = tasks.filter((task) => task.checked === true);

  return (
    <div>
      <div className="footer col-8 p-3 border border-2 rounded-2 mx-auto mt-2 d-flex justify-content-between align-items-center col-lg-4 ">
        <div className="tasks-left">
          <div className="text-success text-opacity-50"> tasks left</div>
        </div>
        <div className="filters d-flex flex-row gap-2">
          <div className=" p-0 text-success text-opacity-50" type="submit">All</div>
          <div className=" p-0 text-success text-opacity-50" type="submit">Active</div>
          <div className="btn p-0 text-success text-opacity-50" type="submit">Completed</div>
        </div>
        <div className="clear-completed">
          <div className="p-0 text-success text-opacity-50" type="submit">Clear Completed</div>
        </div>
      </div>
    </div>
  );
}

export default TaskFooter;
