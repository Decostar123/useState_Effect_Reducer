import React from "react";
import { ACTIONS } from "./RApp.js";

function Todo(params) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <span
        style={{
          color: params.todo.complete ? "green" : "red",
          marginRight: "0.75rem",
        }}
      >
        {params.todo.name}
      </span>

      <button
        onClick={() =>
          params.dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: params.todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() => {
          params.dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: params.todo.id },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Todo;
