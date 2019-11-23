import { CREATE_MESSAGE, GET_ERRORS } from "./types";

// Create message here
export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  };
};

export const returnErrors = (message, status) => {
  return {
    type: GET_ERRORS,
    payload: { message, status }
  };
};
