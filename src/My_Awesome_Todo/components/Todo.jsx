import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Grid, Button, Checkbox } from "semantic-ui-react";
import "./todo.css";

function Todo({ todos, id, onDelete, onCheck }) {
  let [value, setValue] = useState("");
  let [clicked, setClicked] = useState(true);
  let handleCheck = () => {
    setClicked(!clicked);
    if (clicked) {
      return setValue(onCheck());
    } else {
      return setValue("none");
    }
  };
  let handleDelete = () => {
    onDelete(id);
  };

  return (
    <div
      id={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Checkbox onClick={handleCheck} />
      <Card
        style={{
          padding: "10px",
          width: "500px",
          margin: "10px",
          border: "1px solid rgb(97, 84, 222)",
          fontFamily: "sans-serif",
          fontSize: "20px",
          color: "rgb(17, 36, 203)",
          textDecorationLine: value,
        }}
      >
        {todos}
      </Card>
      <Button
        className="btn"
        style={{
          width: "40px",
          height: "40px",
          margin: "5px",
          background: " white",
          color: "red",
          border: "1px solid red",
        }}
        icon="trash"
        onClick={handleDelete}
      />
    </div>
  );
}

export default Todo;
