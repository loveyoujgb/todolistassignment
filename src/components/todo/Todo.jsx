import "./style.css";
function Todo({ list, todoDone, onRemove }) {
  return (
    <>
      <div key={list.id} className="todoBox">
        <div className="boxContent">
          <h2>{list.title}</h2>
          <span>{list.content}</span>
        </div>
        <button onClick={() => onRemove(list.id)} className="redButton button">
          삭제하기
        </button>
        <button onClick={() => todoDone(list.id)} className="greendButton button">
          {list.done === false ? "완료" : "취소"}
        </button>
      </div>
    </>
  );
}

export default Todo;
