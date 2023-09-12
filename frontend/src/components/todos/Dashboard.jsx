import React from "react";
import Form from "./Form";
import Todos from "./Todos";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Form />
      <Todos />
    </React.Fragment>
  );
}
