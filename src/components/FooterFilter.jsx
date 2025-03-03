import React from "react";

const FooterFilter = ({ setFilter, tasksLeft, removeCompletedTask }) => {
  return (
    <div className="bg-light mb-2 col-8 p-3 border border-2 rounded-2 mx-auto d-flex justify-content-between align-items-center col-lg-4 gap-3">
      <div className="tasks-left text-success text-opacity-50">
        {tasksLeft} tasks left
      </div>
      <div className="filters d-flex flex-row gap-2">
        <button
          className="btn btn-link text-success text-opacity-50 p-0"
          onClick={() => setFilter("all")}
          aria-label="Show all tasks"
        >
          All
        </button>
        <button
          className="btn btn-link text-success text-opacity-50 p-0"
          onClick={() => setFilter("active")}
          aria-label="Show active tasks"
        >
          Active
        </button>
        <button
          className="btn btn-link text-success text-opacity-50 p-0"
          onClick={() => setFilter("completed")}
          aria-label="Show completed tasks"
        >
          Completed
        </button>
      </div>
      <button
        className="btn btn-link text-success text-opacity-50 p-0"
        onClick={removeCompletedTask}
        aria-label="Clear completed tasks"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default FooterFilter;