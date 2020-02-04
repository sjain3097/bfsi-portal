import React from 'react';
const ImageSlide = ({ Icon, subtitle, hide, id }) => (
  <div id={id}>
    <p
      className={hide}
      className='carousel_item'
      // className='border'
    >
      <img id='slider' src={Icon} />
      <p
        className={``}
        style={{
          color: '#126BC5',
          fontWeight: '600',
          width: '70%',
          textAlign: 'center',
          'line-height': '1.333em'
        }}
      >
        {subtitle}
      </p>
    </p>
  </div>
);
export default ImageSlide;
