import {
  ADD_USER,
  LOG_OUT,
  ADD_TO_CART,
  ADD_AMOUNT_TO_CART,
} from "./app-action";

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
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ADD_AMOUNT_TO_CART:
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
