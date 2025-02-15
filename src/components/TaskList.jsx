
import { HiH3 } from "react-icons/hi2";
import TaskCard from "./TaskCard";

function TaskList({tasks, removeTask}) {
  return (tasks.length < 1 ? (<div className="task-list d-flex flex-column gap-2 align-items-center mt-5 text-success text-opacity-50">No tasks yet</div>) :
    (<div className="task-list d-flex flex-column gap-2 align-items-center mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} removeTask={removeTask}/>
        ))}
    </div>
   
    )
  )
}

export default TaskList;
