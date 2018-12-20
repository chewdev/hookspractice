import React, { useState, useEffect } from "react";

export default function Form() {
  const [input1, setInput1] = useState("");
  const [setValue, setSetValue] = useState("");

  useEffect(
    () => {
      if (input1 === "Update") {
        setSetValue(input1);
      }
    },
    [input1]
  );

  return (
    <div>
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

      <button onClick={() => setSetValue(input1)}>set value</button>
      <div>{setValue || "Value not set"}</div>
    </div>
  );
}
