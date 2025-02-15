import { IoTrashSharp } from "react-icons/io5";




function TaskCard({task}) {
  return (
    <div className="col-6">
      <div className="card">
        <div className="card-body d-flex justify-content-between">
         <div className="d-flex align-items-center">


          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={task.completed}
            />
        
          </div>
          <h5 className="card-title m-0 text-success text-opacity-75">
            {task.text}
          </h5>
         </div>
          <div className="text-body">
            <IoTrashSharp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
