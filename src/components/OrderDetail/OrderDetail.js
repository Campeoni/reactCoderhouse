import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import './order-detail.css';           
function OrderDetail({product, restaStock, sumaStock, removeItem }) {  

  const onRemove = ()=>{      
    removeItem(product.id);            
  } 

  const onResta=()=>{
    if (product.cantidad-1 >= 1 ) {
    restaStock(product,product.cantidad-1)
    }
  }

  const onSuma=()=>{
    if ( product.cantidad+1 <= product.stock ) {
      sumaStock(product,product.cantidad+1)
    }
  }

  return (
    <div className="orderItems">            
      <button onClick={onRemove} className='botonEliminar'>
        X
      </button>
      <div>        
        <img src={product.imagen} alt={product.name}/> 
      </div>
      <div>
        {product.name}
      </div>
      <div>
        {product.price}
      </div>
      <ItemCount stock={product.cantidad} restar={onResta} sumar={onSuma}/>
      <div>
        { (product.price * product.cantidad).toFixed(2)}
      </div>
    </div>     
  )  
};

export default OrderDetail;