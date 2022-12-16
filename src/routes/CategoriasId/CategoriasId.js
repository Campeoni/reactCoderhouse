import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataProductos from '../../components/Data/Productos.js';
import fetchProducts from '../../components/Data/fetchProducts.js';
import dataCategorias from '../../components/Data/Category.js';
import fetchCategorias from '../../components/Data/fetchCategories.js';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.js'

function CategoriasId() {
  const {id} = useParams();

  const[products, setProducts] = useState([]);
  const[category, setCategory] = useState([]);

  useEffect(()=>{ 
    const readProducts = async()=>{
      try{
        return await fetchProducts(dataProductos);              
      } catch (error) {
        console.log(error)
      }
    }     
    const readCategorys = async()=>{
      try{
        return await fetchCategorias(dataCategorias);              
      } catch (error) {
        console.log(error)
      }
    }    
    readProducts().then(data => {
      const filtroProducts = data.filter((element)=>{
        return id == 0 ? true : element.category == id
      })      
      setProducts(filtroProducts)
    })    

    readCategorys().then(data => {      
      
      const filtroCategories = data.filter((element)=>{
        if (id == element.id){
          return true
        }        
      })      
      
      setCategory(filtroCategories[0])
    })    

    return ()  =>{}
    
  }, [id]);

  return (
    <div>      
      <ItemListContainer products={products} categoria={category} />  
    </div>     
  )
};

export default CategoriasId;