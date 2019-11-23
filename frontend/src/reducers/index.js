import { combineReducers } from "redux";
import todos from "./todos";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  auth,
  todos,
  errors,
  messages
});
