import React, { useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoReducer from "./TodoReducer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los Challenges",
    done: false,
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] ADD TODO',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: '[TODO] DELETE TODO',
      payload: todoId,
    };
    dispatch(action);
  };

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  return (
    <>
      <h1>
        TodoApp: {todos.length}, <small> Pendientes: {pendingTodos} </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
