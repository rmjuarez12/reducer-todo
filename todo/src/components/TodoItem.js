import React from "react";

export default function TodoItem(props) {
  console.log(props);

  return (
    <li>
      <label htmlFor={`item-${props.item.id}`}>
        <input type='checkbox' id={`item-${props.item.id}`} /> {props.item.name}
      </label>
    </li>
  );
}
