import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos = [], onDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, key) => {
        return <TodoItem key={key} todo={todo} onDelete={onDelete} />;
      })}
    </ul>
  );
};

export default TodoList;
