import "./style.css";
import { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const update = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: title,
      content: content,
      done: false,
    };
    props.updateTodo(todo);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form className="form" onSubmit={update}>
        <div className="leftForm">
          <div>제목</div>
          <input
            autoFocus
            className="formInput"
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <div>내용</div>
          <input
            className="formInput"
            type="text"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </div>
        <button className="rightForm" type="submit">
          추가하기
        </button>
      </form>
    </>
  );
}

export default Form;
