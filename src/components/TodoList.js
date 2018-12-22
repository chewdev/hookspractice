import React, { useState } from "react";

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => {
          setTodoItems([...todoItems, todoInput]);
          setTodoInput("");
        }}
      >
        Add Item
      </button>
      <ul>
        {todoItems.map((item, ind) => (
          <li
            key={ind}
            onClick={() =>
              setTodoItems([
                ...todoItems.slice(0, ind),
                ...todoItems.slice(ind + 1)
              ])
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
