import React from 'react';
import CardWidget from '../CardWidget/CardWidget.js';
import Brand from '../Brand/Brand.js';
import Links from '../Links/Links.js';

import './nav-bar.css';

const NavBar = ({ src, alt = '' }) => {
  return (
    <div className="navbar">
      NavBar

      <Brand/>
      <Links/>
      <CardWidget/>
    </div>
  );
};

export default NavBar;
