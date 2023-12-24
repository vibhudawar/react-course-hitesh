import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const cartState = useContext(CartContext);
  const total = cartState.items.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h1>Cart:</h1>
      {cartState &&
        cartState.items.map((item) => (
          <li>
            {item.name} - ₹{item.price}
          </li>
        ))}
      <h5>Total Bill = ₹{total}</h5>
    </div>
  );
}

export default Cart;
