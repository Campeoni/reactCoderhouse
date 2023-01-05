import React  from 'react';
import OrderDetail from '../OrderDetail/OrderDetail.js';
import { Link } from 'react-router-dom';
import './order-list.css';

function OrderList({products, restaStock, sumaStock, removeItem}) { 
  const url = "/Checkout";

  return (
    <div className="orderContainrar">
      <div className='orderTitulos'>
        <div className="orderEliminar">
          x          
        </div>
        <div className="orderImagen">
          Imagen
        </div>
        <div className="orderProducto">
          Producto
        </div>
        <div className="orderPrecio">
          Precio
        </div>
        <div className="orderCantidad">
          Cantidad
        </div>
        <div className="orderTotal">
          Sub Total
        </div>
      </div>  
          
      {products.length > 0 
        ?
        <div className='orderDatos'> 
          <div className='orderContenido' > 
            {products.map((element)=>{
              return (
                <OrderDetail key={element.id} product={element} restaStock={restaStock} sumaStock={sumaStock} removeItem={removeItem} /> 
                
              )
            })}
          </div>
          <div className='orderfinalizar' > 
            <Link to={url}>              
              <button>
                finalizar compra 
              </button> 
            </Link>
          </div>
        </div>
        : <div className='orderNothing'> No hay ningun producto en tu carrito </div>          
      }
        
    </div>
    
  )  
};

export default OrderList;