import React from 'react';
import './style.css';

import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'



export default function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer mensaje='hola'/>
    </div>
  );
}