import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataProductos from '../../components/Data/Productos.js';
import fetchProducts from '../../components/Data/fetchProducts.js';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer.js'

const ItemId = ()=> {
  const {id} = useParams();
  const[product, setProduct] = useState([]);

  useEffect(()=>{ 
    const readProducts = async()=>{
      try{
        return await fetchProducts(dataProductos);              
      } catch (error) {
        console.log(error)
      }
    }     
    
    readProducts().then(data => {
      const item = data.filter((element)=>{
        if (element.id == id) {                 
          return true
        } 
      })          
      setProduct(item[0])          
    })        

    return ()  =>{}
  }, [id]);

  return (
    <div className='container'>               
      <ItemDetailContainer product={product} />  
    </div>     
  )
};

export default ItemId;