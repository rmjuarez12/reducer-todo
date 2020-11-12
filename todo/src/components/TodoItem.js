import React from "react";

export default function TodoItem(props) {
  return (
    <li className={props.item.completed ? "completed" : "pending"}>
      <label
        htmlFor={`item-${props.item.id}`}
        onChange={() => props.completedToggle(props.item.id)}
      >
        <input type='checkbox' id={`item-${props.item.id}`} /> {props.item.name}
      </label>
    </li>
  );
}
