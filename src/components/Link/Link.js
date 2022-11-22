import React from 'react';

import './link.css';

const Link = ({name}) => {
  return (
    <a className='link' href='#'>
      {name}
    </a>
  );
};

export default Link;
