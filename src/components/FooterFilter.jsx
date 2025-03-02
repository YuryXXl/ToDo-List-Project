import React from "react";


const FooterFilter = ({ setFilter, tasksLeft, removeCompletedTask }) => {
  return (
    <div>
      <div className="bg-light mb-2 col-8 p-3 border border-2 rounded-2 mx-auto d-flex justify-content-between align-items-center col-lg-4 gap-3">
        <div>
          <div className="tasks-left text-success text-opacity-50">
            {tasksLeft} tasks left
          </div>
        </div>
        <div className="filters d-flex flex-row gap-2">
          <div
            className="task-all p-0 text-success text-opacity-50"
            type="submit"
            onClick={() => setFilter("all")}
          >
            All
          </div>
          <div
            className="task-active p-0 text-success text-opacity-50"
            type="submit"
            onClick={() => setFilter("active")}
          >
            Active
          </div>
          <div
            className="task-completed btn p-0 text-success text-opacity-50"
            type="submit"
            onClick={() => setFilter("completed")}
          >
            Completed
          </div>
        </div>
        <div>
          <div
            className="clear-completed p-0 text-success text-opacity-50"
            type="submit"
            onClick={removeCompletedTask}
          >
            Clear Completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFilter;
