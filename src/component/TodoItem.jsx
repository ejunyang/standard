import React from "react";

const ToDoItem = ({ todo, onRemove, onToggle }) => {
  const { id, title, content, isDone } = todo;
  return (
    <>
      <li className="listBox">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
        {isDone && (
          <button
            style={{ background: "red", color: "#fff" }}
            onClick={() => onToggle(id)}
          >
            Cancle
          </button>
        )}
        {!isDone && (
          <button
            style={{ background: "blue", color: "#fff" }}
            onClick={() => onToggle(id)}
          >
            Complate
          </button>
        )}
        <button onClick={() => onRemove(id)}>delete</button>
      </li>
    </>
  );
};

export default ToDoItem;
