import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { exId: 1, exTitle: "제목1", exContent: "내용1", exStatus: false },
    { exId: 2, exTitle: "제목2", exContent: "내용2", exStatus: true },
  ]);

  const todoList = todos.filter(function (todo) {
    return todo.exStatus === false;
  });

  const doneList = todos.filter(function (todo) {
    return todo.exStatus === true;
  });

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  return (
    <div>
      <header>My Todo List</header>
      <main>
        <div>
          <form
            onSubmit={function (e) {
              e.preventDefault();
              const createdTodo = {
                id: 1,
                exTitle: title,
                exContents: contents,
                exStatus: false,
              }
              setTodos([...todos, createdTodo]);
            }}
          >
            <input
              value={title}
              onChange={function (e) {
                setTitle(e.target.value);
              }}
            ></input>
            <input
              value={contents}
              onChange={function (e) {
                setContents(e.target.value);
              }}
            ></input>
            <button type="submit">제출</button>
          </form>
        </div>
        <div>
          <h2>해야할 일</h2>
          {todoList.map(function (t) {
            return (
              <div
                key={t.exId}
                style={{
                  margin: "10px",
                  paddingLeft: "20px",
                }}
              >
                <p>{t.exId}</p>
                <h3>{t.exTitle}</h3>
                <p>{t.exContent}</p>
                <p>{t.exStatus}</p>
              </div>
            );
          })}
          <h2>완료한 일</h2>
          {doneList.map(function (t) {
            return (
              <div
                key={t.exId}
                style={{
                  margin: "10px",
                  paddingLeft: "20px",
                }}
              >
                <p>{t.exId}</p>
                <h3>{t.exTitle}</h3>
                <p>{t.exContent}</p>
                <p>{t.exStatus}</p>
              </div>
            );
          })}
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
