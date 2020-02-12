import React from 'react';
const FooterTile = ({ Icon, heading }) => {
  return (
    <div className=''>
      <img src={Icon} className='footer--tile-icon' />
      <h2 className='footer--tile-heading'>{heading}</h2>
    </div>
  );
};

export default FooterTile;
