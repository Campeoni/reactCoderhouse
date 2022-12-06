import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import NavBar from './components/NavBar/NavBar.js'
import Ofertas from './routes/Ofertas/Ofertas.js'
import Categorias from './routes/Categorias/Categorias.js'
import CategoriasId from './routes/CategoriasId/CategoriasId.js'
import QuienesSomos from './routes/QuienesSomos/QuienesSomos.js'
import FAQ from './routes/FAQ/FAQ.js'
import MiCuenta from './routes/MiCuenta/MiCuenta.js'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element= {<Categorias />}/>
        <Route exact path="/Categorias/:id" element= {<CategoriasId />}/>        
        <Route exact path="/Ofertas" element= {<Ofertas />}/>
        <Route exact path="/QuienesSomos" element= {<QuienesSomos />}/>
        <Route exact path="/FAQ" element= {<FAQ />}/>
        <Route exact path="/MiCuenta" element= {<MiCuenta />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;