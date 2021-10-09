import React, {useEffect, useState, useContext} from 'react';
import App from './App';

//contexts
import {CartProvider} from './src/contexts/cart/CartContext';
import {OrderProvider} from './src/contexts/order/OrderContext';
import {CategoryProvider} from './src/contexts/homeTab/HomeTabContext';
import {AppAuthProvider} from './src/contexts/app/AppAuthContext';

const Main = () => {
  return (
    <CartProvider>
      <OrderProvider>
        <CategoryProvider>
          <AppAuthProvider>
            <App />
          </AppAuthProvider>
        </CategoryProvider>
      </OrderProvider>
    </CartProvider>
  );
};

export default Main;
