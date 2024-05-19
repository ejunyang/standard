import React, { useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="insertWrap">
      <form onSubmit={onSubmit}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default TodoForm;
