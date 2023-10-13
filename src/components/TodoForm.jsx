import React, { useState } from "react";

export default function TodoForm({ onNewTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onNewTodo({
      id: new Date().getTime(),
      description: newTodo,
      done: false,
    });
    setNewTodo("");
  };

  return (
    <div>
      <h4> Agregar TODO </h4>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-primary mt-1" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}
