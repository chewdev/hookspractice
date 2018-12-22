import React from "react";

export default function SetValueButton({ input1, setSetValue }) {
  return <button onClick={() => setSetValue(input1)}>Set Value</button>;
}
