
// A Basic, buttonless form. This allows for very quick additions to the list

export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <form onSubmit={onAddFormSubmit}>
        <label htmlFor="todo">New Todo Item:</label>
        <input
          name="todo"
          type="text"
          placeholder="Press Enter to submit"
          value={todo}
          onChange={onAddInputChange}
        />
      </form>
    );
  }
  