import React, {createContext, useState} from 'react';
import dummyData from './misc/dummyData';

export const CategoryContext = createContext();
export const CategoryProvider = props => {
  const [CategoryItems, setCategoryItems] = useState([...dummyData]);

  function search(name) {
    const flteredList = CategoryItems.filter(item => {
      for(let i of item._item){
        return (i._title.toLowerCase().includes(name.toLowerCase()) || i._title.toLowerCase() == name.toLowerCase());
      }
    });
    flteredList.length >= 1 ? setCategoryItems(flteredList) : null;
  }

  function resetSearch(){
    setCategoryItems([...dummyData]);
  }

  const actions = {
    search,
    resetSearch
  };

  return (
    <CategoryContext.Provider value={[CategoryItems, setCategoryItems, actions]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
