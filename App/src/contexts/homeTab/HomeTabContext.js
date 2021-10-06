import React, {createContext, useState} from 'react';
import dummyData from './misc/dummyData';

export const CategoryContext = createContext();
export const CategoryProvider = props => {
  const [CategoryItems, setCategoryItems] = useState([...dummyData]);

  return (
    <CategoryContext.Provider value={[CategoryItems, setCategoryItems]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
