import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import Todo from "./Todo.jsx";

function TodoList({ tasks, onDelete, onCheck }) {
  let Todos = tasks.map((item, i) => (
    <Todo onCheck={onCheck} onDelete={onDelete} key={i} id={i} todos={item} />
  ));
  return <Grid.Row>{Todos}</Grid.Row>;
}

export default TodoList;
