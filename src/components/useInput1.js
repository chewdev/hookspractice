import { useState, useEffect } from "react";

export default function useInput1() {
  const [input1, setInput1] = useState(localStorage.getItem("input1") || "");

  useEffect(
    () => {
      localStorage.setItem("input1", input1);
    },
    [input1]
  );

  return [input1, setInput1];
}
