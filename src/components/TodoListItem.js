import React from "react";

export default function TodoListItem({ item, ind, deleteItem }) {
  return (
    <li key={ind}>
      {item}
      {/* <button>Edit</button> */
      /*Add ability to edit todo item*/}
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
}
