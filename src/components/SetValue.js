import React from "react";

export default function SetValue({ setValue }) {
  return <div>{setValue || "Value not set"}</div>;
}
