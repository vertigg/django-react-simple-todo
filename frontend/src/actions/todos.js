import axios from "axios";

import { TODO_GET, TODO_DELETE, TODO_ADD } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

export const getTodos = () => (dispatch, getState) => {
  axios
    .get("/api/todos/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: TODO_GET,
        payload: res.data
      });
    })
    .catch(error =>
      dispatch(returnErrors(error.response.data, error.response.status))
    );
};

export const deleteTodo = id => (dispatch, getState) => {
  axios
    .delete(`/api/todos/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteTodo: "Todo deleted" }));
      dispatch({
        type: TODO_DELETE,
        payload: id
      });
    })
    .catch(error =>
      dispatch(returnErrors(error.response.data, error.response.status))
    );
};

export const addTodo = item => (dispatch, getState) => {
  axios
    .post("/api/todos/", item, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addTodo: "Todo added" }));
      dispatch({
        type: TODO_ADD,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch(returnErrors(error.response.data, error.response.status));
    });
};
