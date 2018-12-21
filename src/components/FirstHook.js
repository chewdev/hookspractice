import React from "react";
import useInput1 from "./useInput1";
import useSetValue from "./useSetValue";
import Input1 from "./Input1";
import SetValue from "./SetValue";
import SetValueButton from "./SetValueButton";

export default function Form() {
  const [input1, setInput1] = useInput1();
  const [setValue, setSetValue] = useSetValue(input1);

  return (
    <div>
      <Input1 input1={input1} setInput1={setInput1} />
      <SetValueButton input1={input1} setSetValue={setSetValue} />
      <SetValue setValue={setValue} />
    </div>
  );
}
