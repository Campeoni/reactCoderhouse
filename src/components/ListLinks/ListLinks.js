import React from 'react';
import Link from '../Link/Link.js';

import './list-links.css';

const ListLinks = () => {
  return (
    <div className='list-links'>
      <Link name='Ofertas'/>
      <Link name='categorias'/>
      <Link name='Quienes Somos'/>
      <Link name='FAQ'/>
      <Link name='Mi cuenta'/>
    </div>
  );
};

export default ListLinks;
