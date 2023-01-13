import React from "react";
import { useState } from "react";

const CommentForm = ({ handleSubmit, submitLabel }) => {
  const [text, setText] = useState("");
  const isInputTextDisable = text.trim().length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <div className="form-comments">
      <form onSubmit={onSubmit} className="comment-input">
        <input
          type="text"
          placeholder="comment please"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="form-button" disabled={isInputTextDisable}>
          {submitLabel}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
