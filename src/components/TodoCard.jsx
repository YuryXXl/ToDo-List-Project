import { FaTrashCan } from "react-icons/fa6";

function TodoCard({ todo }) {
  return (
    <div className="col-6">
      <div className="card bg-bone-white text-dark ">
        <div className="card-body d-flex justify-content-between">
            <div className="checkbox d-flex gap-2">
                <input type="checkbox" className="form-check-input" {...todo}/>
                <h5 className="card-title n-0">
                  {todo.title}
                </h5>
            </div>
         
          <div className="trash">
            <FaTrashCan />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
