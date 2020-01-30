import React from 'react';
const ImageSlide = ({ Icon, subtitle, hide }) => (
  <div>
    <p
      className={hide}
      style={{
        height: '70px',
        width: '235px',
        color: '#999999',
        'text-color': 'center'
      }}
    >
      <img
        style={{
          height: '50px',
          width: '100px',
          'text-color': 'center',
          filter: 'invert(0.5)'
        }}
        src={Icon}
      />
      <p className={hide} style={{ color: '#126BC5', fontWeight: '600' }}>
        {subtitle}
      </p>
    </p>
  </div>
);
export default ImageSlide;
