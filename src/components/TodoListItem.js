import React, { useState } from "react";

export default function TodoListItem({ item, ind, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li key={ind}>
      {isEditing ? (
        <input
          type="text"
          value={item}
          onChange={e => editItem(e.target.value)}
        />
      ) : (
        item
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
}
