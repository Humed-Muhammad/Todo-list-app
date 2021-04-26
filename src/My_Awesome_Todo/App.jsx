import React, { useState } from "react";
import Headers from "./components/Headers.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoSubmit from "./components/TodoSubmit.jsx";
import "./style.css";

function App() {
  let [task, setTask] = useState({ tasks: [] });
  let handleSubmit = (item) => {
    let newArry = [...task.tasks, item];
    setTask({ tasks: newArry });
  };
  let handleDelete = (index) => {
    let newArry = [...task.tasks];
    newArry.splice(index, 1);
    setTask({ tasks: newArry });
  };
  let handleCheck = () => {
    return "line-through";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderBottom: "1px solid rgb(97, 84, 222)",
        borderRight: "1px solid rgb(97, 84, 222)",
        borderLeft: "1px solid rgb(97, 84, 222)",
        borderRadius: "20%",
        padding: "20px",
      }}
    >
      <h1 className="title">List Your Todos</h1>
      <Headers todoCount={task.tasks.length} />
      <TodoList
        onCheck={handleCheck}
        onDelete={handleDelete}
        tasks={task.tasks}
      />
      <TodoSubmit onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
