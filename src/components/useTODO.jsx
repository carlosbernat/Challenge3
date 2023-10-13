
import { useState } from "react";

export const useTODO = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: new Date().getTime(),
        description,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const countTodos = todos.length;
  const countPendingTodos = todos.filter((todo) => !todo.completed).length;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  };
};
