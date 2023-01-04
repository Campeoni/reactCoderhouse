import React  from 'react';
import { Link } from 'react-router-dom';
import './pago.css';
import DetalleFactura from '../../components/DetalleFactura/DetalleFactura';
import Pedido from '../../components/Pedido/Pedido';

function Pago() { 
  const url = "/ProcesandoPago";
  
  return (
    <div>
      <div className='pagoTitulo'>
        Pago
      </div>
      <div className='pagoContainer'>
        <div className='detalleFactura'>
          <DetalleFactura/>        
        </div>
        <div className='pedido'>
          <Pedido/>
        </div>              
      </div>
      <div>
        <Link to={url}>
          <button>
            finalizar compra 
          </button> 
        </Link>
      </div>
    </div>
  )  
};

export default Pago;