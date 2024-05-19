import React, { useState } from "react";
import TodoContainer from "./component/TodoContainer";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onInsert = (title, content) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
    };

    setTodos([...todos, newTodo]);
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const workingTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);

  return (
    <>
      <TodoContainer />
      <TodoForm onInsert={onInsert} />
      <TodoList
        key={todos.id}
        todos={workingTodo}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <TodoList
        key={todos.id}
        todos={doneTodo}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
};

export default App;
