import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
const  image = "../img/";

const Item = ({item}) => {  
  const url = `/Item/${item.id}`;

  return (
    <div className='card'>      

      <Link to={url}>
        <img src= {`${image}${item.id}.webp`} alt={item.name}></img>
      </Link>  
      <div className='name'> {item.name} </div>
      <div className='category'> {item.categoryName} </div>
      <div className={`price ${item.offer && 'tachado'}`}> Precio $ {item.price} </div>   
      {item.offer && <div className='price'> Oferta $ {item.offer} </div> }  
      
    </div>
  )
};

export default Item;


