import React, {useState, useEffect}  from 'react';
import dataProductos from '../../components/Data/Productos.js';
import fetchProducts from '../../components/Data/fetchProducts.js';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function Categorias() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{ 
    const readProducts = async()=>{
      try{
        return await fetchProducts(dataProductos);              
      } catch (error) {
        console.log(error)
      }
    } 
    
    readProducts().then(data => {setProducts(data)})
    
    return ()  =>{}
  }, []);

  return (
    <div>
      <ItemListContainer products={products} categoria={{"id":0,"name":"Productos"}} />                
    </div>      
  )
};

export default Categorias;