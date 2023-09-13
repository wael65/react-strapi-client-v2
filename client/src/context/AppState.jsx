import { useReducer } from "react";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

import { ADD_USER, LOG_OUT, ADD_TO_CART } from "./app-action";

const initialState = {
  users: null,
  cart: [],
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
      payload: null,
    });
  };

  // Log Out
  const addToCart = () => {
    // @ts-ignore
    dispatch({
      type: ADD_TO_CART,
      payload: null,
    });
  };
  return (
    <AppContext.Provider
      value={{ users: state.users, addUser, logout, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
