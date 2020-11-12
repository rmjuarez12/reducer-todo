// Import Dependencies
import React, { useReducer, useState } from "react";

// Import Reducers
import { initialItemState, todoReducer } from "../reducers/todoReducer";

// Import Components
import TodoItem from "./TodoItem";

export default function TodoList() {
  // State to add new ToDo items
  const [todoItem, setTodoItem] = useState("");

  // Reducer to be used
  const [state, dispatch] = useReducer(todoReducer, initialItemState);

  return (
    <div>
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
