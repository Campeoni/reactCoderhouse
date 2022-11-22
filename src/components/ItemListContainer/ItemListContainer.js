import React from 'react';

import './item-list-container.css';

const ItemListContainer = ({mensaje}) => {
  return (
    <div className='mensaje'>
      {mensaje}
    </div>
  );
};

export default ItemListContainer;
