import React from "react";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

export default function CompareMethods() {
  return (
    <div>
      with useReducer method:
      <p />
      <UseReducer />
      <hr />
      with useState method:
      <p />
      <UseState />
    </div>
  );
}
