import React from 'react';
import './style.css';

import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'



export default function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer titulo='Este es el titulo por prop'>        
        <h2>Este es el sub-tutilo por Children</h2>        
      </ItemListContainer> 
      
    </div>
  );
}