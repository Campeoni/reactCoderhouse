import React from 'react';
import Item from '../Items/Item.js';
import './item-list.css';
import '../../style.css';

const ItemList = ({ items, titulo, loading }) => {    
  return (
    <div className='container' >       
      <h1> Listado de {titulo.name}</h1>
      {loading 
        ? 
          
          (<div className='loader-container'> 
            <div className="loader"/>
          </div>)
        :          
          <div className='cards'> 
            {items?.map((element)=> {
              return (
                <div key={element.id}> 
                  <Item item={element} />
                </div>
              )  
            })}
          </div>}
    </div>
  )
}

export default ItemList;