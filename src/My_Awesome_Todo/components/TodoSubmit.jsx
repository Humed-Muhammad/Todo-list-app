import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Form, Input, Button } from "semantic-ui-react";
import "./todo.css";

function TodoSubmit({ onSubmit }) {
  let [value, setValue] = useState("");
  let handleChange = (e) => {
    let result = e.target.value;
    setValue(result);
  };
  let handleSubmit = () => {
    onSubmit(value);
    setValue("");
  };
  return (
    <Form>
      <Input
        style={{
          width: "400px",
          margin: "5px",
          color: "rgb(210, 44, 1)",
          fontSize: "15px",
        }}
        type="text"
        placeholder="Add Your Todos"
        value={value}
        onChange={handleChange}
      />
      <Button
        className="add-btn"
        style={{
          background: " white",
          color: "rgb(19, 97, 213)",
          border: "1px solid rgb(186, 71, 32)",
        }}
        icon="plus"
        onClick={handleSubmit}
      />
    </Form>
  );
}

export default TodoSubmit;
