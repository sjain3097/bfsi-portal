import React from 'react';
const ImageSlide = ({ Icon, subtitle, hide }) => (
  <div
    className={hide}
    style={{
      // height: '55%',
      width: '60%',
      color: '#999999',
      'text-color': 'center'
    }}
  >
    <Icon style={{ transform: 'scale(0.7)' }} />
    <p className='border'>{subtitle}</p>
  </div>
);
export default ImageSlide;
