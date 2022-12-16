import React from 'react';
import {useCartContext} from '../../context/CartContext.js'
import './card-widget.css';
const  bag = "../img/bag.png";

const CardWidget = () => {
  const {cartItem} = useCartContext();
  
  return (
    <div className='card-widget'>
      <img className='bag' src={bag} alt='bag' />
      <div className='count'>{cartItem.length}</div> 
    </div>
  );
};

export default CardWidget;
