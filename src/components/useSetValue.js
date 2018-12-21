import { useState, useEffect } from "react";

export default function useSetValue(input) {
  const [setValue, setSetValue] = useState("");

  useEffect(
    () => {
      if (input === "Update") {
        setSetValue(input);
      }
    },
    [input]
  );

  return [setValue, setSetValue];
}
