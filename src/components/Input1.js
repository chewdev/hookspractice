import React from "react";

export default function Input1({ input1, setInput1 }) {
  return (
    <input
      type="text"
      style={{
        width: "100%",
        height: "20px",
        border: "1px solid blue"
      }}
      value={input1}
      onChange={e => setInput1(e.target.value)}
    />
  );
}
