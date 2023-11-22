import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
      <button className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    </li>
  );
};

export default TodoItem