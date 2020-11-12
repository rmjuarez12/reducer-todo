// Import Dependencies
import React, { useReducer, useState } from "react";

// Import Reducers
import { initialItemState, todoReducer } from "../reducers/todoReducer";

// Import Components
import TodoItem from "./TodoItem";

export default function TodoList() {
  // State to the add new task field
  const [newTaskItem, setNewTaskItem] = useState("");

  // Reducer to be used
  const [state, dispatch] = useReducer(todoReducer, initialItemState);

  // Handle text input changes
  const handleChanges = (e) => {
    setNewTaskItem(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChanges}
          type='text'
          placeholder='Add New Task'
          value={newTaskItem}
        />
        <button>Add Task</button>
      </form>
      {state.todo.length > 0 && (
        <ul>
          {state.todo.map((item) => {
            return <TodoItem item={item} key={item.id} />;
          })}
        </ul>
      )}
    </div>
  );
}
