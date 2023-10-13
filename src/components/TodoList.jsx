import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div className="col-7">
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{todo.description}</span>
            <button className="btn btn-danger">Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
