import { useReducer } from "react";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

import { ADD_USER } from "./app-action";

const initialState = {
  users: [],
};

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addUser = (user) => {
    // @ts-ignore
    dispatch({
      type: ADD_USER,
      payload: user,
    });
  };
  return (
    <AppContext.Provider value={{ users: state.users, addUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
