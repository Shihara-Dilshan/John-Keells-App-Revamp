import React, {createContext, useState} from 'react';
import dummyData from "./misc/dummyData"

export const CartContext = createContext();
export const CartProvider = props => {
  const [cartItems, setCartItems] = useState([...dummyData]);

  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
