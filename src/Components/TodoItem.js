
import "./Todo.css";

export default function TodoItem({
    todo,
    onEditClick,
    onDeleteClick
  }) {
    return (
        <div className="col-lg-10 mx-auto">
        <li className="px-2" key={todo.id}>
            {(todo.text + " |")}
            <button className="btn btn-primary m-2" onClick={() => onEditClick(todo)}>Edit</button>
            <button className="btn btn-danger" onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </li>
      </div>
    );
  }
  