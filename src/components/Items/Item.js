import React from 'react';
import './item.css';
const  image = "../img/";

const Item = ({item}) => {
  console.log(item)



  return (
    <div className='card'>      
      <img src= {`${image}${item.id}.webp`} alt={item.name}></img>
      <div className='name'> {item.name} </div>
      <div className='category'> {item.categoryName} </div>
      
      <div className={`price ${item.offer && 'tachado'}`}> $ {item.price} </div>   
      
      {item.offer && <div className='price'> Oferta $ {item.offer} </div> }
    </div>
  )
};

export default Item;


