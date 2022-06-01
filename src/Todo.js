import React from "react";
import { ACTIONS } from "./App.js";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        className="btn1"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        className="btn2"
        onClick={() =>
          dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
