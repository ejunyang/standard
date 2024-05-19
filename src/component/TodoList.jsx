import React from "react";
import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <>
              <TodoItem
                key={todo.id}
                todo={todo}
                onRemove={onRemove}
                onToggle={onToggle}
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
