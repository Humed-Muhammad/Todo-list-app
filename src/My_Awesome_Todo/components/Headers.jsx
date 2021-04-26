import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Card, Grid } from "semantic-ui-react";

function Headers({ todoCount }) {
  return (
    <Grid.Column>
      <Header>
        <Card
          style={{
            padding: "10px",
            width: "600px",
            textAlign: "center",
            margin: "10px",
            backgroundColor: "rgba(97, 84, 222,0.6)",
            borderRadius: "0",
            boxShadow: "5px 5px 3px gray",
          }}
          content={
            <h2 style={{ fontFamily: "sans-serif", color: "white" }}>
              You Have <b style={{ color: "rgb(247, 219, 1)" }}>{todoCount}</b>{" "}
              Todos
            </h2>
          }
        />
      </Header>
    </Grid.Column>
  );
}

export default Headers;
