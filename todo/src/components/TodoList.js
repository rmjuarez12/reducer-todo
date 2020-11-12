// Import Dependencies
import React, { useReducer, useState } from "react";

// Import Reducers
import {
  initialItemState,
  todoReducer,
  ADD_TASK,
  MARK_COMPLETE,
} from "../reducers/todoReducer";

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

  // Handle form submission
  const handleSubmi = (e) => {
    e.preventDefault();

    if (newTaskItem === "") {
      alert("Please enter a task name");
    } else {
      dispatch({
        type: ADD_TASK,
        payload: newTaskItem,
      });

      setNewTaskItem("");
    }
  };

  // Handle the completed toggle
  const completedToggle = (id) => {
    dispatch({
      type: MARK_COMPLETE,
      payload: id,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmi}>
        <input
          onChange={handleChanges}
          type='text'
          placeholder='Add New Task'
          value={newTaskItem}
        />
        <button>Add Task</button>
      </form>
      {state.todo.length > 0 && (
        <ul className='task-list'>
          {state.todo.map((item) => {
            return (
              <TodoItem
                item={item}
                key={item.id}
                completedToggle={completedToggle}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
