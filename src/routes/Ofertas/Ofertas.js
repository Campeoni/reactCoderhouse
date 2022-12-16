import React, {useState, useEffect } from 'react';
import dataProductos from '../../components/Data/Productos.js';
import fetchProducts from '../../components/Data/fetchProducts.js';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function Ofertas() {  

  const[products, setProducts] = useState([]); 

  useEffect(()=>{ 
    const readProducts = async()=>{
      try{
        return await fetchProducts(dataProductos);              
      } catch (error) {
        console.log(error)
      }
    }      
    readProducts().then(data => {
      const filtroProducts = data.filter((element)=>{
        return element.offer ? true : false
        
      })      
      setProducts(filtroProducts)
    })    

    return ()  =>{}    
  }, []);

  return (
    <div>      
      <ItemListContainer products={products} categoria={{"id":0,"name":"Ofertas"}} />  
    </div>     
  )
};

export default Ofertas;