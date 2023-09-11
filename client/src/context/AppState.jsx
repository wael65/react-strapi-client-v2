import { useReducer } from "react";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

import { ADD_USER, LOG_OUT } from "./app-action";

const initialState = {
  users: { username: "" },
};

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Log In
  const addUser = (user) => {
    // @ts-ignore
    dispatch({
      type: ADD_USER,
      payload: user,
    });
  };

  // Log Out
  const logout = () => {
    // @ts-ignore
    dispatch({
      type: LOG_OUT,
      payload: [],
    });
  };
  return (
    <AppContext.Provider value={{ users: state.users, addUser, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
