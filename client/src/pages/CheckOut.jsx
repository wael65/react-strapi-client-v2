import { useContext } from "react";
import AppContext from "../context/app-context";
import { Box } from "@mui/material";

const CheckOut = () => {
  const { cart, quantity } = useContext(AppContext);
  console.log(cart);
  console.log(quantity);

  return (
    <Box>
      {" "}
      <p>Cart</p>
      {cart.map((product) => (
        <div key={product.data.id}>
          <div>{product.data.id}</div>
          <div>{product.data.attributes.title}</div>
          <div>{product.data.attributes.discription}</div>
          <div>{product.data.attributes.price}</div>
          <div>{product.data.attributes.rating}</div>
          <div>{quantity}</div>
        </div>
      ))}
    </Box>
  );
};

export default CheckOut;
