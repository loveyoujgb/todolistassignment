import Todo from "../todo/Todo";
import "./style.css";

function List({ list, todoDone, onRemove }) {
  return (
    <div className="listWrap">
      <h2>Working..🔥</h2>
      <div className="listBox">
        {list.map((lists) =>
          lists.done === false ? (
            <div key={lists.id}>
              <Todo list={lists} todoDone={todoDone} onRemove={onRemove} />
            </div>
          ) : null
        )}
      </div>
      <h2>Done..! 🎉</h2>
      <div className="listBox">
        {list.map((lists) =>
          lists.done !== false ? (
            <div key={lists.id}>
              <Todo list={lists} todoDone={todoDone} onRemove={onRemove} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default List;
