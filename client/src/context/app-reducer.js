import { ADD_USER } from "./app-action";

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        // users: [...state.users, action.payload],
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default appReducer;
