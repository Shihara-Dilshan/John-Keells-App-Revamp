import React, {createContext, useState} from 'react';
import dummyData from './misc/dummyData';

export const OrderContext = createContext();
export const OrderProvider = props => {
  const [orderData, setOrderData] = useState([...dummyData]);

  //TODO :: implement all the functions that make any changes to the order state in here 
  //and export as a common object 
  //refer cart context

  return (
    <OrderContext.Provider value={[orderData, setOrderData]}>
      {props.children}
    </OrderContext.Provider>
  );
};
