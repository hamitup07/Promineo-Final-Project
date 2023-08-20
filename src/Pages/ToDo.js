import { useEffect, useState } from "react";
import TodoItem from "../Components/TodoItem";
import AddTodoForm from "../Components/AddTodoForm";
import EditForm from "../Components/EditForm";
import "../Components/Todo.css";

// A Todo app, using local storage to maintain an array of todos.
// Unlike the Notes page, todos can be edited as well as added and deleted.

export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    // ^^^ So that the entire page doesn't reset
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          onEditInputChange={handleEditInputChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />
      )}

        {/* The array of todos is mapped across the TodoItem component */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}



















// import React, { useEffect, useState } from "react";
// import ToDoForm from "../Components/ToDoForm";


// export default function ToDo() {
//     const [mytodos, setTodos] = useState([]);

//     useEffect(() => {
//         const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//         if (storageTodos) {
//           setTodos(storageTodos);
//         }
//       }, []);

//       useEffect(() => {
//         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mytodos));
//       }, [mytodos]);

//       function addTodo(todo) {
//         setTodos([todo, ...mytodos]);
//         console.log(mytodos);
//       }

//       function toggleComplete(id) {
//         setTodos(
//           mytodos.map(todo => {
//             if (todo.id === id) {
//               return {
//                 ...todo,
//                 completed: !todo.completed
//               };
//             }
//             return todo;
//           })
//         );
//       }

//       function removeTodo(id) {
//         setTodos(mytodos.filter(todo => todo.id !== id));
//       }

//       return (
//         <div className="App">
//           <ToDoForm addTodo={addTodo} />
//           <ToDoList
//             todos={mytodos}
//             removeTodo={removeTodo}
//             toggleComplete={toggleComplete}
//           />
//         </div>
//       );
// }

