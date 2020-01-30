import React from 'react';
import home from '../../svgs/home.svg';
const ImageSlide = ({ Icon, subtitle, hide }) => (
  <div>
    <p
      className={hide}
      // className='border'
      style={{
        height: '70px',
        width: '235px',
        color: '#999999',
        'text-color': 'center'
      }}
    >
      <img
        style={{
          height: '60px',
          width: '200px',
          color: '#999999',
          'text-color': 'center',
          filter: 'invert(0.5)'
        }}
        src={Icon}
      />
    </p>
    <p className={hide}>{subtitle}</p>
  </div>
);
export default ImageSlide;
