import React  from 'react';
import {useCartContext} from '../../context/CartContext'
import './pedido.css';


function Pedido() { 
  const {cartItem} = useCartContext();  
  return (
    <div className='pedidoContainer'>
      <div className='titulo'>
        Tu Pedido
      </div>
      <div className='itemsTituloContainer'>
              
        <div className='titulos'>
          Producto
        </div>

        <div className='total'>
          SubTotal
        </div>

      </div>
      
      {cartItem.map((item)=>{          
        return (
          <div className='itemsPedidoContainer'>
            <div className='itemName'>
              {item.name}  X {item.cantidad}
            </div>            
            <div className='itemSubtotal'>
              {item.price * item.cantidad}
            </div>            
          </div>  
        )        
      }
      )}
      
      <div className='total'>
        {`Total= ${cartItem.reduce((total, element)=>{
          return total + (element.price * element.cantidad)
        },0)}`}
      </div>
          
      
    </div>
  )  
};

export default Pedido;