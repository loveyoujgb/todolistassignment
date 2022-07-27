import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import { useState } from "react";

function Layout() {
  const [list, setList] = useState([]);

  const updateTodo = (lists) => {
    const newList = [...list, lists];
    setList(newList);
  };

  const todoDone = (id) => {
    const newList = [...list];
    newList.map((finish) => {
      if (id === finish.id) {
        if (finish.done === false) {
          finish.done = true;
        } else {
          finish.done = false;
        }
      }
    });
    setList(newList);
  };
  const onRemove = (id) => {
    setList(list.filter((lists) => lists.id !== id));
  };
  return (
    <div className="layout">
      <Header />
      <Form updateTodo={updateTodo} list={list} />
      <List list={list} todoDone={todoDone} onRemove={onRemove} />
    </div>
  );
}

export default Layout;
