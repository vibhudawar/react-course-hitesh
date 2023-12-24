import { React, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Item(props) {
  const cartState = useContext(CartContext);
  return (
    <div>
      <h4>Item Name: {props.name}</h4>
      <p>Item Price: ₹{props.price}</p>
      <button
        onClick={() =>
          cartState.setItems([
            ...cartState.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
