import React from 'react';
import Item from '../Items/Item.js'
import './item-list.css';

const ItemList = ({ items, titulo }) => {  
  return (
    <div className='container' >       
      <h1> Listado de {titulo.name}</h1> 
      <div className='cards'> 
        {items?.map((element)=> {
          return (
            <div key={element.id}> 
              <Item item={element} />
            </div>
          )  
        })}

      </div>
    </div>
  )
}

export default ItemList;