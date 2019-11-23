import { TODO_GET, TODO_DELETE, TODO_ADD } from "../actions/types.js";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TODO_GET:
      return {
        ...state,
        items: action.payload
      };
    case TODO_DELETE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case TODO_ADD:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
}
