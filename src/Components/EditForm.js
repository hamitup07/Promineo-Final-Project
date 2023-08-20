import "./Todo.css"

// A form to edit todos after they have been submitted.

export default function EditForm({
    
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {

    return (
      <form onSubmit={onEditFormSubmit}>
        <label htmlFor="updateTodo">Update todo: </label>
        <input
          name="updateTodo"
          type="text"
          placeholder="Press Enter to Submit"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button classname="btn btn-success" type="submit" onClick={onEditFormSubmit}>
          Update
        </button>
        <button classname="btn btn-warning" onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    );
  }
  