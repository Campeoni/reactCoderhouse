import React, {useEffect, useState} from 'react';
import './item-count.css';

const ItemCount = ({stock}) => {
  const [counter, setCounter] = useState(1);
  
  const decrementarStock = ()=>{
    if (counter > 1 ) {
      setCounter(counter-1);
    }
    
  }

  const incrementarStock = ()=>{   
    if ( counter < stock ) 
      setCounter(counter+1);    
  }

  return (
    <div className='itemCounter'>
      <button onClick={decrementarStock} > - </button>
      <div> {counter} </div>
      <button onClick={incrementarStock}> + </button>
    </div>  
  );
};

export default ItemCount;
