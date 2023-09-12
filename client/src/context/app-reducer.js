import { ADD_USER, LOG_OUT } from "./app-action";

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
