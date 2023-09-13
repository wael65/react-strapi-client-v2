import { useReducer } from "react";
import AppContext from "./app-context";
import appReducer from "./app-reducer";

import {
  ADD_USER,
  LOG_OUT,
  ADD_TO_CART,
  ADD_AMOUNT_TO_CART,
} from "./app-action";

const initialState = {
  users: null,
  cart: [],
  quantity: "0",
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
  const addToCart = (product) => {
    // @ts-ignore
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  const addAmountToCart = (amount) => {
    // @ts-ignore
    dispatch({
      type: ADD_AMOUNT_TO_CART,
      payload: amount,
    });
  };
  return (
    <AppContext.Provider
      value={{
        users: state.users,
        cart: state.cart,
        quantity: state.quantity,
        addUser,
        logout,
        addToCart,
        addAmountToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
