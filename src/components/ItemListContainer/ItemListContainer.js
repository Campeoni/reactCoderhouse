import React from 'react';
import './item-list-container.css';
import ItemList from '../ItemList/ItemList.js';

const ItemListContainer = ({products, categoria}) => {
  return (
    <div >                  
      <ItemList items={products} titulo={categoria}/>
    </div>
  )
  }; 

export default ItemListContainer;