import React from "react";
import { Link } from "react-router-dom";

export default function LazyLoaded() {
  return (
    <div>
      <Link to="/">Todo List</Link>
      <br />
      This component is to be lazy loaded...
    </div>
  );
}
