import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

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
          if (todoInput === "") {
            return;
          }
          setTodoItems([...todoItems, todoInput]);
          setTodoInput("");
        }}
      >
        Add Item
      </button>
      <ul>
        {todoItems.map((item, ind) => (
          <TodoListItem
            item={item}
            ind={ind}
            deleteItem={() =>
              setTodoItems([
                ...todoItems.slice(0, ind),
                ...todoItems.slice(ind + 1)
              ])
            }
            editItem={value => {
              const newItems = todoItems.map((item, index) => {
                if (ind !== index) {
                  return item;
                }
                return value;
              });

              setTodoItems(newItems);
            }}
            todoItems={todoItems}
          />
        ))}
      </ul>
    </div>
  );
}
