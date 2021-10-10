import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import dummyData from './misc/dummyData';
import Snackbar from 'react-native-snackbar';

export const CartContext = createContext();
export const CartProvider = props => {
  const [cartItems, setCartItems] = useState([...dummyData]);

  function clearFullCart() {
    setCartItems([]);
  }

  function undoClearFullCart(previousCart) {
    setCartItems(previousCart);
  }

  function incrementCartItemQuanity(id) {
    const increadList = cartItems.map(item => {
      if (item._id == id) {
        item._quatity++;
        return item;
      }
      return item;
    });
    setCartItems(increadList);
  }

  function decrementCartItemQuanity(id) {
    const increadList = cartItems.map(item => {
      if (item._id == id) {
        if (item._quatity > 1) {
          item._quatity--;
        } else {
          removeItem(id);
        }
        return item;
      }
      return item;
    });
    setCartItems(increadList);
  }

  function removeItem(id) {
    Alert.alert(
      'Confirm',
      'Are you sure want to remove this item from the cart?',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const tempCart = cartItems;
            setCartItems([...cartItems.filter(item => item._id != id)]);

            Snackbar.show({
              text: 'Item removed from cart',
              duration: Snackbar.LENGTH_LONG,
              action: {
                text: 'UNDO',
                textColor: 'green',
                onPress: () => {
                  undoRemoveItem(tempCart);
                },
              },
            });
          },
        },
      ],
    );
  }

  function undoRemoveItem(previousCart) {
    setCartItems(previousCart);
  }

  const actions = {
    clearFullCart,
    undoClearFullCart,
    incrementCartItemQuanity,
    decrementCartItemQuanity,
    removeItem,
    undoRemoveItem,
  };

  return (
    <CartContext.Provider value={[cartItems, setCartItems, actions]}>
      {props.children}
    </CartContext.Provider>
  );
};
