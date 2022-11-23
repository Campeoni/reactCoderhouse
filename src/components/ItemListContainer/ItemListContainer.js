import React from 'react';

import './item-list-container.css';

const ItemListContainer = ({titulo, children}) => {
  return (
    <div className='mensaje'>
      <h1>
        {titulo}
      </h1>
      {children}
    </div>
  );
};

export default ItemListContainer;
