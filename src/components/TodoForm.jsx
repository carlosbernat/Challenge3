import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="col-5">
      <h4> Agregar TODO </h4>
      <hr />
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe un nuevo TODO"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn btn-outline-primary mt-1" onClick={handleAddTodo}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
