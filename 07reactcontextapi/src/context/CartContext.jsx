import { createContext, useState } from "react";

export const CartContext = createContext(null);

// now make context provider
export const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
