import React from 'react';
import './card-widget.css';
import bag from '../../assets/img/bag.png';

const CardWidget = () => {
  return (
    <div className='card-widget'>
      <img className='bag' src={bag} alt='bag' />
        <div className='count'>2</div> 
      
    </div>
  );
};

export default CardWidget;
